import './Profile.css';
import { NavLink, Link, Routes, Route } from 'react-router-dom';

function Profile (props) {
  return (
    <div className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <form className="profile__form" name="profile">
        
          <label className="profile__label">Имя
          <input className="profile__input" name="name" id="name" type="text" placeholder="Имя" minLength="2" maxLength="30" required /></label>
          <span className="profile__error name-input-error" type="text">Проверка</span>
        
          <label className="profile__label">E-mail
          <input className="profile__input" name="email" id="email" type="email" placeholder="E-mail" required /></label>
          <span className="profile__error email-input-error" type="text">Проверка</span>

        <div className="profile__button-container">
          <button className="profile__btn-edit" type="submit">Редактировать</button>
          <button className="profile__btn-exit"><Link to="/signin" className="profile__text-link">Выйти из аккаунта</Link></button>
        </div>
      </form>
    </div>
    )
  }
  
export default Profile;