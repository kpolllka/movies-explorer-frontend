import './Footer.css';

function Footer(props) {
  return (
  <footer className="footer">
    <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
    <div className="footer__container">
      <p className="footer__date">&copy; 2023</p>
      <nav className="footer__navigate">
        <a className="footer__navigate-link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
        <a className="footer__navigate-link" href="https://github.com/kpolllka" target="_blank" rel="noreferrer">Github</a>
      </nav>
    </div>
  </footer>
  );
}

export default Footer;