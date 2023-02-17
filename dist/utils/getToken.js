"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToken = void 0;
const https = require("https");
function getToken() {
    return new Promise((res, rej) => {
        https.get('https://test.gnzs.ru/oauth/get-token.php', {
            headers: {
                'Content-Type': 'application/json',
                'X-Client-Id': 30878566,
            },
        }, (response) => {
            let chunks = '';
            response.on('data', (chunk) => {
                chunks += chunk;
            });
            response.on('end', () => res(JSON.parse(chunks)));
            response.on('error', (err) => rej(err));
        });
    });
}
exports.getToken = getToken;
//# sourceMappingURL=getToken.js.map