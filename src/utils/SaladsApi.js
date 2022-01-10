import { Api } from './Api'

class SaladsApi extends Api {
  constructor({ baseUrl, headers }) {
    super({ baseUrl, headers })
  }

  getList() {
    return this._checkResponse({
      method: 'GET',
      path: '/salads',
    })
  }

  getById({ id }) {
    return this._checkResponse({
      method: 'GET',
      path: `/salad/${id}`,
    })
  }
}

export const saladsApi = new SaladsApi({
  baseUrl: 'http://test-job.webatom.ru',
  headers: {
    'Content-Type': 'application/json',
  },
})
