const { Random } = require('mockjs')
const tokens = {
    admin: `admin-token-${Random.guid()}`,
}

function getCodeData(e) {
    let code = "";
    let codeLength = 4;
    let selectChar = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
        'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K',
        'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
    for (let i = 0; i < codeLength; i++) {
        let charIndex = Math.floor(Math.random() * 57);
        code += selectChar[charIndex];
    }
    if (code.length != codeLength) {
        getCodeData(e);
    }
    return code;
}


export default {
    'post|/web/api/login': (option) => {
        const { username } = JSON.parse(option.body)
        const token = tokens[username]
        if (!token)
            return {
                code: 500,
                msg: '帐户或密码不正确',
            }
        return {
            code: 200,
            msg: 'success',
            data: { token, username },
        }
    },
    'get|/web/api/getCode': (option) => {
        return {
            status: 200,
            message: 'success',
            data: getCodeData("")
        }
    }
};