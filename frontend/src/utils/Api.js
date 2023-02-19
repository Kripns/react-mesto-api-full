import apiConfig from './apiConfig';

class Api {
  constructor(config) {
    this._url = config.url;
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
      credentials: 'include',
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
  }

  editProfile(data) {
    return this._request(`${this._url}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify(data),
    });
  }

  getUser() {
    return this._request(`${this._url}/users/me`, {
      credentials: 'include',
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
  }

  saveCard(data) {
    return this._request(`${this._url}/cards`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify(data),
    });
  }

  changeLikeCardStatus(cardId, isLiked) {
    return this._request(`${this._url}/cards/${cardId}/likes`, {
      method: `${isLiked ? 'DELETE' : 'PUT'}`,
      credentials: 'include',
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
  }

  deleteCard(cardId) {
    return this._request(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
  }

  updateAvatar(avatar) {
    return this._request(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify(avatar),
    });
  }
}

const api = new Api(apiConfig);

export default api;
