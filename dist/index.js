"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decoratorConfig = {
    Fields: {
        UID: 'UID'
    },
    Errors: {
        Login: "需要登录"
    }
};
function login(err = "") {
    return (t, k) => {
        let o = t[k];
        t[k] = async () => {
            if (!(await t._session(exports.decoratorConfig.Fields.UID) > 0)) {
                throw new Error(err || exports.decoratorConfig.Errors.Login);
            }
            return await o();
        };
        return t;
    };
}
exports.login = login;
//# sourceMappingURL=index.js.map