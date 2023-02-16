import React from 'react';
import PopupWithForm from './PopupWithForm';
import useFormAndValidation from '../hooks/useFormAndValidation';


function AddPlacePopup(props) {
  const { isOpen, onClose, isLoading, onSubmit } = props;
  const { values, errors, isValid, handleChange, resetForm } =
    useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
  }

  React.useEffect(() => {
    resetForm();
  }, [isOpen, resetForm]);

  return (
    <PopupWithForm
      name='card-adding'
      title='Новое место'
      isOpen={isOpen}
      onClose={onClose}
      isValid={isValid}
      onSubmit={handleSubmit}
      buttonText={isLoading ? 'Сохранение...' : 'Создать'}
    >
      <input
        className={`form__input form__input_place_popup form__input_type_place-name ${
          errors.name && 'form__input_type_error'}`}
        name='name'
        value={values.name || ''}
        onChange={handleChange}
        id='place-name-input'
        type='text'
        placeholder='Название'
        minLength='2'
        maxLength='30'
        required
      />
      <span className={`form__error place-name-input-error ${
            isOpen && !isValid && 'form__error_visible'
          }`}>{errors.name}</span>
      <input
        className={`form__input form__input_place_popup form__input_type_url ${
          errors.link && 'form__input_type_error'}`}
        name='link'
        value={values.link || ''}
        onChange={handleChange}
        id='picture-link-input'
        type='url'
        placeholder='Ссылка на картинку'
        required
      />
      <span className={`form__error picture-link-input-error ${
            isOpen && !isValid && 'form__error_visible'
          }`}>{errors.link}</span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
