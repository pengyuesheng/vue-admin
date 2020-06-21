import router from "@/router";
import store from "@/store";

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
    const token = localStorage.getItem("token");
    if (token) {
        if (to.path === "/login") {
            next("/");
        } else {
            console.log(store);
            var hasRoles = store.getters && store.getters.hasRoles;
            if (hasRoles) {
                next();
            } else {
                try {
                    const roles = await store.dispatch("user/getRoles");
                    const routes = await store.dispatch("permission/getRoutes", roles);
                    router.addRoutes(routes);
                    next({...to, replace: true});
                } catch (error) {
                    console.log(error);
                }
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            // 白名单中路由放过
            next()
          } else {
            // 重定向至登录页
            next(`/login`)
          }
    }
})