import React from 'react';

function ConfirmationPopup(props) {
  const { name, title, isOpen, onClose, onSubmit, buttonText } = props;

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
      <div className='popup__container'>
        <button className='popup__close-icon' type='button' onClick={onClose} />
        <h2 className='popup__heading'>{title}</h2>
        <button className='form__button form__button_place_popup' type='button' onClick={handleSubmit}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default ConfirmationPopup;
