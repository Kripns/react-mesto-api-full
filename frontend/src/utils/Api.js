import apiConfig from './apiConfig';

class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _request(url, options) {
    return fetch(url, options).then(this._handleResponse)
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getCards() {
    return this._request(`${this._url}/cards`, {
      headers: this._headers,
    });
  }

  editProfile(data) {
    return this._request(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data),
    });
  }

  getUser() {
    return this._request(`${this._url}/users/me`, {
      headers: this._headers,
    });
  }

  saveCard(data) {
    return this._request(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
    });
  }

  changeLikeCardStatus(cardId, isLiked) {
    return this._request(`${this._url}/cards/${cardId}/likes`, {
      method: `${isLiked ? 'DELETE' : 'PUT'}`,
      headers: this._headers,
    });
  }

  deleteCard(cardId) {
    return this._request(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    });
  }

  updateAvatar(avatar) {
    return this._request(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(avatar),
    });
  }
}

const api = new Api(apiConfig);

export default api;
