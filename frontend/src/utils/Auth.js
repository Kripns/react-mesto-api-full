export const BASE_URL = 'https://auth.nomoreparties.co';

function request(url, options) {
  return fetch(url, options).then(handleResponse);
}

function handleResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

export function register(email, password) {
  return request(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
}

export function login(email, password) {
  return request(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ email, password }),
  }).then(data => {
    if (data.token) {
      localStorage.setItem('token', data.token);
      return data;
    } else {
      return;
    }
  });
}

export function checkToken() {
  return request(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
}
