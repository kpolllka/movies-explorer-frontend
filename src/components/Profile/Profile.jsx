import "./Profile.css";
import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from "../Contexts/CurrentUserContext";
import useFormAndValidation from "../../hooks/UseFormAndValidation";

const Profile = ({ onSignOut, onUpdateUser, webError, webSuces }) => {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation();
  const [saveMode, setSaveMode] = useState(false);
  
  const handleSaveClick = () => {
    setSaveMode(true);
  }
  
  useEffect(() => {
    if (currentUser) {
      resetForm({name: currentUser.name, email: currentUser.email})
    }
  }, [currentUser]);
    
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isValid) {
      onUpdateUser ({
        name: values.name,
        email: values.email,
      })
      setSaveMode(false);
    }
  }

  const validBtn = (isValid && values.email !== currentUser.email) || (isValid && values.name !== currentUser.name);
  
  return (
    <section className="profile">
      <h1 className="profile__title">Привет, {currentUser.name}!</h1>
      <form className="profile__form" name="profile" noValidate>
        
        <label className="profile__label">Имя
        <input className="profile__input" name="name" value={values.name || ''} onChange={handleChange} readOnly={!saveMode} id="name-profile" type="text" placeholder="Имя" minLength="2" maxLength="30" required /></label>
        <span className="profile__error name-input-error">{errors.name}</span>
      
        <label className="profile__label">E-mail
        <input className="profile__input" name="email" value={values.email || ''} onChange={handleChange} readOnly={!saveMode} pattern="^[\w]+@[a-z]+\.[a-z]{2,4}$" id="email-profile" type="email" placeholder="E-mail" required /></label>
        <span className="profile__error email-input-error">{errors.email}</span>
       
        <div className="error">
          {webError ? (<span className="profile__error-server">{webError}</span>) : ((<span className="profile__error-server"></span>))}
          {webSuces ? (<span className="profile__error-server profile__error-server_successful">{webSuces}</span>) : (<span className="profile__error-server profile__error-server_successful"></span>)}
        </div>

        {saveMode ? (
        <button className="profile__saved" onClick={handleSubmit} disabled={!validBtn} type="submit">Сохранить</button>
        ) : (
        <div className="profile__button-container">
          <button className="profile__btn-edit" onClick={handleSaveClick} type="submit">Редактировать</button>
          <button className="profile__text-link" onClick={onSignOut} type="submit">Выйти из аккаунта</button>
        </div>
        )}
      </form>
    </section>
  )
}
  
export default Profile;