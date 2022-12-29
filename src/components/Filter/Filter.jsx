import React from 'react';
import PropTypes from 'prop-types';

import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <FilterLabel>
    Find contacts by name
    <FilterInput value={value} onChange={onChange}></FilterInput>
  </FilterLabel>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
