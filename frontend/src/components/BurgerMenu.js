import React from 'react';
import line from '../images/Line.png';

function BurgerMenu(props) {
  const { isOpen, handleClick } = props;

  return (
    <div className='burger-menu' onClick={handleClick}>
      {!isOpen && (
        <div className='burger-menu__button burger-menu__button_type_open'>
          <img src={line} alt='menu' />
          <img src={line} alt='menu' />
          <img src={line} alt='menu' />
        </div>
      )}

      {isOpen && (
        <div className='burger-menu__button burger-menu__button_type_close' />
      )}
    </div>
  );
}

export default BurgerMenu;
