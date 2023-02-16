import React from "react";


function InfoTooltip(props) {
  const { name, isOpen, onClose, registered } = props;

  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
      <div className='popup__container'>
        <button className='popup__close-icon' type='button' onClick={onClose} />
        <div
          className={`popup__registration-status ${
            registered && 'popup__registration-status_ok'
          }`}
        />
        <p className='popup__text'>
          {registered
            ? 'Вы успешно зарегистрировались!'
            : 'Что-то пошло не так! Попробуйте ещё раз.'}
        </p>
      </div>
    </div>
  );
}


export default InfoTooltip;