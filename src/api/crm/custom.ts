import { getToken } from 'src/utils/getToken';
import * as AmoCrmAPI from '@sipuni/amocrm';

export class CustomCRM {
  API = null;

  constructor() {
    this._init_();
  }

  async _init_() {
    const { access_token, base_domain } = await getToken();
    this.API = new AmoCrmAPI({
      domain: base_domain,
      accessToken: access_token,
    });
  }
}
