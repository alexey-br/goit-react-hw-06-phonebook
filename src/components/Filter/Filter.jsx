import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, getFilter } from 'redux/filterSlice';
import { FilterLabel, FilterInput } from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onInput = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <label>
      <FilterLabel>Find contacts by name:</FilterLabel>
      <FilterInput type="text" value={filter} onChange={onInput} />
    </label>
  );
}
