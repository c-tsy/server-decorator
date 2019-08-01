export const decoratorConfig = {
    Fields: {
        UID: 'UID'
    },
    Errors: {
        Login: "需要登录"
    }
}
/**
 * 必须登录
 * @param err 
 */
export function login(err: string = "") {
    return (t, k) => {
        let o = t[k];
        t[k] = async () => {
            if (!(await t._session(decoratorConfig.Fields.UID) > 0)) {
                throw new Error(err || decoratorConfig.Errors.Login)
            }
            return await o();
        }
        return t;
    }
}


