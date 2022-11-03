import { FilterLabel, FilterInput } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onInput = e => {
    console.log(e.target.value);
    dispatch(changeFilter(e.target.value));
  };

  return (
    <label>
      <FilterLabel>Find contacts by name:</FilterLabel>

      <FilterInput type="text" value={filter} onChange={onInput} />
    </label>
  );
}
