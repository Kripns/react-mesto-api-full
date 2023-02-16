import React from 'react';
import PopupWithForm from './PopupWithForm';
import useFormAndValidation from '../hooks/useFormAndValidation';

function EditAvatarPopup(props) {
  const { isOpen, onClose, isLoading, onUpdateAvatar } = props;
  const { values, errors, isValid, handleChange, resetForm } =
    useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({ avatar: values.avatar });
  }

  React.useEffect(() => {
    resetForm();
  }, [isOpen, resetForm]);

  return (
    <PopupWithForm
      name='edit-avatar'
      title='Обновить аватар'
      isOpen={isOpen}
      onClose={onClose}
      isValid={isValid}
      onSubmit={handleSubmit}
      buttonText={isLoading ? 'Сохранение...' : 'Сохранить'}
    >
      <input
        className={`form__input form__input_place_popup form__input_type_url ${
          errors.avatar && 'form__input_type_error'
        }`}
        name='avatar'
        onChange={handleChange}
        id='avatar-link-input'
        type='url'
        value={values.avatar || ''}
        placeholder='Ссылка на аватар'
        required
      />
      <span
        className={`form__error avatar-link-input-error ${
          isOpen && !isValid && 'form__error_visible'
        }`}
      >
        {errors.avatar}
      </span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
