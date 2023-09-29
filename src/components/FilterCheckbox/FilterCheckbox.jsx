import "./FilterCheckbox.css";

const FilterCheckbox = ({ handleShortFilmsOnly, shortFilmsOnly }) => {
  const handleCheckboxChange = (event) => {
    handleShortFilmsOnly(event.target.checked);
  };

  return (
    <form className="checkbox">
      <label className="checkbox__container">
        <input
          className="checkbox__input"
          type="checkbox"
          checked={shortFilmsOnly}
          onChange={handleCheckboxChange}
        />
        <span className="checkbox__style"></span>
      </label>
      <p className="checkbox__title">Короткометражки</p>
    </form>
  );
}

export default FilterCheckbox;