import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import useFormAndValidation from '../hooks/useFormAndValidation';


function EditPropfilePopup(props) {
  const { isOpen, onClose, isLoading, onUpdateUser } = props;
  const { values, setValues, errors, isValid, handleChange } =
  useFormAndValidation();
  const currentUser = React.useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser(values);
  }

  React.useEffect(() => {
    setValues({ name: currentUser.name, about: currentUser.about });
  }, [currentUser, isOpen, setValues]);

  return (
    <PopupWithForm
      name='edit-profile'
      title='Редактировать профиль'
      isOpen={isOpen}
      onClose={onClose}
      isValid={isValid}
      onSubmit={handleSubmit}
      buttonText={isLoading ? 'Сохранение...' : 'Сохранить'}
    >
      <input
        className={`form__input form__input_place_popup form__input_type_name ${
          errors.name && 'form__input_type_error'}`}
        name='name'
        id='user-name-input'
        type='text'
        onChange={handleChange}
        value={values.name || ''}
        placeholder='Имя'
        minLength='2'
        maxLength='40'
        required
      />
      <span className={`form__error user-name-input-error ${
            isOpen && !isValid && 'form__error_visible'
          }`}>{errors.name}</span>
      <input
        className={`form__input form__input_place_popup form__input_type_job ${
          errors.about && 'form__input_type_error'}`}
        name='about'
        id='user-job-input'
        type='text'
        onChange={handleChange}
        value={values.about || ''}
        placeholder='О себе'
        minLength='2'
        maxLength='200'
        required
      />
      <span className={`form__error user-job-input-error ${
            isOpen && !isValid && 'form__error_visible'
          }`}>{errors.about}</span>
    </PopupWithForm>
  );
}

export default EditPropfilePopup;
