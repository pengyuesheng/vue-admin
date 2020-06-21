import axios from "axios";

const user= {
    namespaced: true,
    state: {
        token: localStorage.getItem("token"),
        roles: [],
        message: "",
    },
    mutations: {
        setRoles(state, roles) {
            state.roles = roles;
        },
        setToken(state, token) {
            state.token = token;
        },
        setMessage(state, message) {
            state.message = message;
        }
    },
    actions: {
        login({commit},  obj) {
            return axios.get("/user/login?username="+obj.username+"&password="+obj.password).then(res => {
                if (res.data.code == 200) {
                    localStorage.setItem("token", res.data.token);
                    commit("setToken", res.data.token);
                    commit("setMessage", "");
                } else {
                    commit("setMessage", res.data.message);
                }
                
            })
        },
        getRoles({commit}) {
            return axios.get("/user/roles").then(res => {
                commit("setRoles", res.data.roles)
                return res.data.roles;
            })
        }
    }
}
export default user;