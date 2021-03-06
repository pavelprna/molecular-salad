import { Api } from './Api'

class MoleculesApi extends Api {
  constructor({ baseUrl, headers }) {
    super({ baseUrl, headers })
  }

  getList() {
    return this._checkResponse({
      method: 'GET',
      path: '/molecules',
    })
  }

  getById({ id }) {
    return this._checkResponse({
      method: 'GET',
      path: `/molecule/${id}`,
    })
  }
}

export const moleculesApi = new MoleculesApi({
  baseUrl: 'http://test-job.webatom.ru',
  headers: {
    'Content-Type': 'application/json',
  },
})
