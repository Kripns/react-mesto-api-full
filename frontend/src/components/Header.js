import React from 'react';
import path from '../images/header-logo.svg';
import { Routes, Route, Link } from 'react-router-dom';
import BurgerMenu from './BurgerMenu';

function Header(props) {
  const { email, handleLogout } = props;
  const [matches, setMatches] = React.useState(
    window.matchMedia('(max-width: 768px)').matches
  );
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  function handleMenuOpen() {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  }

  //Подписываемся на изменение размера экрана
  React.useEffect(() => {
    window
      .matchMedia('(max-width: 768px)')
      .addEventListener('change', e => setMatches(e.matches));
  }, []);


  return (
    <>
      <Routes>
        {!matches && (
          <Route
            path='/'
            element={
              <header className='header'>
                <img className='header__logo' src={path} alt='логотип' />
                <nav className='header__menu'>
                  <div className='auth-info auth-info_place_header'>
                    <p className='auth-info__email'>{email}</p>
                    <button
                      className='auth-info__button'
                      onClick={handleLogout}
                    >
                      Выйти
                    </button>
                  </div>
                </nav>
              </header>
            }
          />
        )}
        {matches && (
          <Route
            path='/'
            element={
              <>
                <div
                  className={`auth-info ${
                    !isMenuOpen ? 'auth-info_hidden' : 'auth-info_visible'
                  }`}
                >
                  <p className='auth-info__email'>{email}</p>
                  <button className='auth-info__button' onClick={handleLogout}>
                    Выйти
                  </button>
                </div>
                <header className='header'>
                  <img className='header__logo' src={path} alt='логотип' />
                  <nav className='header__menu'>
                    <BurgerMenu
                      isOpen={isMenuOpen}
                      handleClick={handleMenuOpen}
                    />
                  </nav>
                </header>
              </>
            }
          />
        )}
        <Route
          path='/sign-in'
          element={
            <header className='header'>
              <img className='header__logo' src={path} alt='логотип' />
              <nav className='header__menu'>
                <div className='auth-info'>
                  <Link className='auth-info__link' to='/sign-up'>
                    Регистрация
                  </Link>
                </div>
              </nav>
            </header>
          }
        />
        <Route
          path='/sign-up'
          element={
            <header className='header'>
              <img className='header__logo' src={path} alt='логотип' />
              <nav className='header__menu'>
                <div className='auth-info'>
                  <Link className='auth-info__link' to='/sign-in'>
                    Войти
                  </Link>
                </div>
              </nav>
            </header>
          }
        />
      </Routes>
    </>
  );
}

export default Header;
