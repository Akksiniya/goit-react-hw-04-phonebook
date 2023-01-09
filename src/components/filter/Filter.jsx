import PropTypes from 'prop-types';

import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ value, onFilterChange }) => {
  return (
    <FilterLabel>
      Find contact by name
      <FilterInput
        type="text"
        name="filter"
        value={value}
        onChange={onFilterChange}
      />
    </FilterLabel>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
