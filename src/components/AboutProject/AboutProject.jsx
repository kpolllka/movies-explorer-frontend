import './AboutProject.css';

function AboutProject(props) {
  return (
    <section className="project" id="about-project">
      <p className="project__about">О проекте</p>
      <div className="project__container-about">
        <div className="project__all">
          <h2 className="project__title">Дипломный проект включал 5 этапов</h2>
          <p className="project__info">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="project__all">
          <h3 className="project__title">На выполнение диплома ушло 5 недель</h3>
          <p className="project__info">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="project__times">
        <p className="project__times-stage">1 неделя</p>
        <p className="project__times-week">4 недели</p>
      </div>
      <div className="project__development">
        <p className="project__back">Back-end</p>
        <p className="project__front">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;