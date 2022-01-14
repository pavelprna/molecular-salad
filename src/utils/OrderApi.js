import { Api } from './Api'

class OrderApi extends Api {
  constructor({ baseUrl, headers }) {
    super({ baseUrl, headers })
  }

  makeOrder(order) {
    return this._checkResponse({
      method: 'POST',
      path: '/order',
      body: order,
    })
  }
}

export const orderApi = new OrderApi({
  baseUrl: 'http://test-job.webatom.ru',
  headers: {
    'Content-Type': 'application/json',
  },
})
