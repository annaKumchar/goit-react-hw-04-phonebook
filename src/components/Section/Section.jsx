import React from 'react';
import PropTypes from 'prop-types';

import { PhonebookSection, Title } from '../Section/Section.styled';

export const Section = ({ title, children }) => (
  <PhonebookSection>
    <Title>{title}</Title>
    {children}
  </PhonebookSection>
);

Section.propTypes = {
  title: PropTypes.string,
};
