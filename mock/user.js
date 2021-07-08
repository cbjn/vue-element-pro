const { Random } = require('mockjs')
const tokens = {
    admin: `admin-token-${Random.guid()}`,
}

export default {
    'post|/web/api/login': (option) => {
        const { username } = option.body
        const token = tokens[username]
        if (!token)
            return {
                code: 500,
                msg: '帐户或密码不正确',
            }
        return {
            code: 200,
            msg: 'success',
            data: { token },
        }
    },
};