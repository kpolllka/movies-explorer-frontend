import './Techs.css';
import { Link, Routes, Route } from 'react-router-dom';

function Tech(props) {
  return (
    <section className="tech" id="about-technology">
      <div className="tech__container">
        <p className="tech__about">Технологии</p>
        <h2 className="tech__title">7 технологий</h2>
        <p className="tech__info">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="tech__used">
          <li className="tech__used-list">HTML</li>
          <li className="tech__used-list">CSS</li>
          <li className="tech__used-list">JS</li>
          <li className="tech__used-list">React</li>
          <li className="tech__used-list">Git</li>
          <li className="tech__used-list">Express.js</li>
          <li className="tech__used-list">mongoDB</li>       
        </ul>
      </div>  
    </section>
  );
}

export default Tech;