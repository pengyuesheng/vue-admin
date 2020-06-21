const bodyParser = require("body-parser");

module.exports = {
    devServer: {
        before: app => {
            app.get("/user/login", (req, res) => {
                const {username, password} = req.query;
                console.log(req);
                if (username=="admin" && password=="admin") {
                    res.json({
                        code: 200,
                        token: username
                    })
                } else {
                    res.json({
                        code: 401,
                        message: "用户名或密码错误"
                    })
                }
            }),
            app.get("/user/roles", (req, res) => {
                res.json({
                    code: 200,
                    roles: ["admin"]
                })
            })
        }
    }
}