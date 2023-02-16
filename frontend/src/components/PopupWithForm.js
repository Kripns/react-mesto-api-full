function PopupWithForm(props) {
  const { name, title, isOpen, onClose, isValid, onSubmit, buttonText } = props;

  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
      <div className='popup__container'>
        <button className='popup__close-icon' type='button' onClick={onClose} />
        <h2 className='popup__heading'>{title}</h2>
        <form className='form form_place_popup' name={name} onSubmit={onSubmit}>
          {props.children}
          <button
            className={`form__button form__button_place_popup ${
              !isValid && 'form__button_disabled'
            }`}
            disabled={!isValid}
            type='submit'
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
