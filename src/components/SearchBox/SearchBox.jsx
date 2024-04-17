import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.filter.filters.name);

  const onFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.div}>
      <p>Find contacts by name</p>
      <input type="text" value={search} onChange={onFilter} />
    </div>
  );
};

export default SearchBox;
