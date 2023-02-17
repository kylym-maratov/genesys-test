"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomCRM = void 0;
const getToken_1 = require("../../utils/getToken");
const AmoCrmAPI = require("@sipuni/amocrm");
class CustomCRM {
    constructor() {
        this.API = null;
        this._init_();
    }
    async _init_() {
        const { access_token, base_domain } = await (0, getToken_1.getToken)();
        this.API = new AmoCrmAPI({
            domain: base_domain,
            accessToken: access_token,
        });
    }
}
exports.CustomCRM = CustomCRM;
//# sourceMappingURL=custom.js.map