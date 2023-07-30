import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject'
import Tech from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import { useLocation } from 'react-router-dom';

function Main(props) {
    return (
      <main className="content">
        <Promo />
        <AboutProject />
        <Tech />
        <AboutMe />
      </main>
    )
  }
  
  export default Main;