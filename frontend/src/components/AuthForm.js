import React from 'react';
import useFormAndValidation from '../hooks/useFormAndValidation';

function AuthForm(props) {
  const { heading, buttonText, onSubmit, children } = props;
  const { values, errors, isValid, handleChange, resetForm } =
    useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values.email, values.password);
  }

  React.useEffect(() => {
    resetForm();
  }, []);

  return (
    <div className='auth-page'>
      <h2 className='auth-page__heading'>{heading}</h2>
      <form className='form form_place_auth' onSubmit={handleSubmit}>
        <input
          className={`form__input form__input_place_auth ${
            errors.email && 'form__input_type_error'
          }`}
          name='email'
          placeholder='Email'
          type='email'
          value={values.email || ''}
          onChange={handleChange}
          required
        />
        <span
          className={`form__error email-input-error ${
            !isValid && 'form__error_visible'
          }`}
        >
          {errors.email}
        </span>
        <input
          className={`form__input form__input_place_auth ${
            errors.password && 'form__input_type_error'
          }`}
          name='password'
          placeholder='Пароль'
          type='password'
          value={values.password || ''}
          onChange={handleChange}
          minLength='8'
          required
        />
        <span
          className={`form__error password-input-error ${
            !isValid && 'form__error_visible'
          }`}
        >
          {errors.password}
        </span>
        <button
          className={`form__button form__button_place_auth ${
            !isValid && 'form__button_disabled'
          }`}
          type='submit'
          disabled={!isValid}
        >
          {buttonText}
        </button>
        {children}
      </form>
    </div>
  );
}

export default AuthForm;
