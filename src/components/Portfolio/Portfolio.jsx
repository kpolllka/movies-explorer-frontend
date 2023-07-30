import './Portfolio.css';
import arrow from '../../images/link_to_portfolio.svg';
import { Link } from 'react-router-dom';

function Portfolio(props) {
    return (
      <section className="portfolio">
        <p className="portfolio__title">Портфолио</p>
        <nav className="portfolio__navigate">
          <Link className="portfolio__navigate-link" to="https://github.com/kpolllka/how-to-learn" target="_blank" rel="noreferrer">Статичный сайт
            <img className="portfolio__navigate-arrow" src={arrow} alt="Стрелка для перехода на сайт"/></Link>
          <Link className="portfolio__navigate-link" to="https://github.com/kpolllka/russian-travel" target="_blank" rel="noreferrer">Адаптивный сайт
            <img className="portfolio__navigate-arrow" src={arrow} alt="Стрелка для перехода на сайт"/></Link>
          <Link className="portfolio__navigate-link" to="https://github.com/kpolllka/react-mesto-api-full-gha" target="_blank" rel="noreferrer">Одностраничное приложение
            <img className="portfolio__navigate-arrow" src={arrow} alt="Стрелка для перехода на сайт"/></Link>
         </nav>
      </section>
    );
  }
  
  export default Portfolio;