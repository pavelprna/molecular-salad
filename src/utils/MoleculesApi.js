class Molecules {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl
    this._headers = headers
  }

  _checkResponse({ path, method, body }) {
    return fetch(this._baseUrl + path, {
      method,
      headers: this._headers,
      body: JSON.stringify(body),
    }).then((res) => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Error ${res.status}`)
    })
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
      path: `/molecules/${id}`,
    })
  }
}

export const moleculesApi = new Molecules({
  baseUrl: 'http://test-job.webatom.ru',
  headers: {
    'Content-Type': 'application/json',
  },
})
