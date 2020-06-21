import {aysncRoutes} from "@/router";

const permission= {
    namespaced: true,
    state: {
        routes: []
    },
    mutations: {
        setRoutes(state, routes) {
            state.routes = routes;
        }
    },
    actions: {
        getRoutes({commit}, roles) {
            return new Promise((resolve) => {
                const routes = filterAsyncRoutes(aysncRoutes, roles);
                commit("setRoutes", routes);
                resolve(routes);
            })
        }
    }
}

function filterAsyncRoutes(routes, roles) {
    const res = [];
    routes.forEach(route => {
        const tmp = {...route};
        if (hasPermission(roles, tmp)) {
            if (tmp.children) {
                tmp.children = filterAsyncRoutes(tmp.children, roles);
            }
            res.push(tmp);
        }
    })
    return res;
}

function hasPermission(roles, route) {
    if (route.meta && route.meta.roles) {
        return roles.some(role => route.meta.roles.includes(role));
    } else {
        return true;
    }
}

export default permission;