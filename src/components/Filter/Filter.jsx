import PropTypes from 'prop-types';
import { FilterWrapper } from './Filter.styled.jsx';
const Filter = ({ value, onChangeFilter }) => {
  return (
    <FilterWrapper>
      Find contacts by name
      <input type="text" value={value} onChange={onChangeFilter} />
    </FilterWrapper>
  );
};
Filter.protoType = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};
export default Filter;
