import "./Profile.css";
import { Link } from "react-router-dom";

function Profile (props) {
  return (
    <div className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <form className="profile__form" name="profile">
        
          <label className="profile__label">Имя
          <input className="profile__input" name="name" id="name-profile" type="text" placeholder="Имя" minLength="2" maxLength="30" required /></label>
          <span className="profile__error name-input-error">Проверка</span>
        
          <label className="profile__label">E-mail
          <input className="profile__input" name="email" id="email-profile" type="email" placeholder="E-mail" required /></label>
          <span className="profile__error email-input-error">Проверка</span>

        <div className="profile__button-container">
          <button className="profile__btn-edit" type="submit">Редактировать</button>
          <Link to="/signin" className="profile__text-link">Выйти из аккаунта</Link>
        </div>
      </form>
    </div>
    )
  }
  
export default Profile;