
const apiConfig = {
  // url: 'https://mesto.nomoreparties.co/v1/cohort-48',
  // url: 'https://api.psid.students.nomoredomains.work',
  url: 'http://localhost:3001',
  headers: {
    "content-type": "application/json",
    authorization: `Bearer ${localStorage.getItem('jwt')}`,
  }
}

export default apiConfig;
