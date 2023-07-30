import './NotFound.css';
import { useNavigate } from 'react-router-dom';

function NotFound (props) {
  let navigate = useNavigate();

  return (
    <div className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__subtitle">Страница не найдена</p>
      <button className="not-found__btn-exit" onClick={()=>navigate(-1)}>Назад</button>
    </div>
    )
  }
  
export default NotFound;