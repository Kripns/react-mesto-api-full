/* eslint-disable import/extensions */
import jwt from 'jsonwebtoken';
import UnauthorizedError from '../utils/errors/unauthorized-error.js';

export default function auth(req, res, next) {
  const { NODE_ENV, JWT_SECRET } = process.env;
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new UnauthorizedError('Необходима авторизация');
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    next(new UnauthorizedError('Необходима авторизация'));
    return;
  }
  req.user = payload;
  next();
}

// const YOUR_JWT = ''; // вставьте сюда JWT, который вернул публичный сервер
// const SECRET_KEY_DEV = 'dev-secret'; // вставьте сюда секретный ключ для разработки из кода
// try {
//   const payload = jwt.verify(YOUR_JWT, SECRET_KEY_DEV);
//   console.log('\x1b[31m%s\x1b[0m', `
//   Надо исправить. В продакшне используется тот же
//   секретный ключ, что и в режиме разработки.
//   `);
// } catch (err) {
//   if (err.name === 'JsonWebTokenError' && err.message === 'invalid signature') {
//     console.log(
//       '\x1b[32m%s\x1b[0m',
//       'Всё в порядке. Секретные ключи отличаются',
//     );
//   } else {
//     console.log(
//       '\x1b[33m%s\x1b[0m',
//       'Что-то не так',
//       err,
//     );
//   }
// }
