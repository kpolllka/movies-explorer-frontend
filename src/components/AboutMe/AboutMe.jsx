import './AboutMe.css';
import Portfolio from '../Portfolio/Portfolio';
import photo from '../../images/about_me_photo.png';

function AboutMe(props) {
  return (
    <section className="aboutme" id="about-student">
      <h2 className="aboutme__about">Студент</h2>
      <div className="aboutme__container">
        <div className="aboutme__container-info">
          <h3 className="aboutme__name">Виталий</h3>
          <p className="aboutme__prof">Фронтенд-разработчик, 30 лет</p>
          <p className="aboutme__info"> Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и&nbsp;дочь. Я люблю слушать музыку, а еще увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании
            «СКБ Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушел с постоянной работы.</p>
          <a className="aboutme__link" href="https://github.com/kpolllka" target="_blank" rel="noreferrer">Github</a>
        </div>
        <img className="aboutme__photo" src={photo} alt="Фото автора сайта" />
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
