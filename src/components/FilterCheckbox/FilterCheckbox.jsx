import "./FilterCheckbox.css";

function FilterCheckbox(props) {
  return (
      <form className="checkbox">
        <label className="checkbox__container">
          <input className="checkbox__input" type="checkbox" />
          <span className="checkbox__style"></span>
        </label>
        <p className="checkbox__title">Короткометражки</p>
      </form>
  );
}

export default FilterCheckbox;