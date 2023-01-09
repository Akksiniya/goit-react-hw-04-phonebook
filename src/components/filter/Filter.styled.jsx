import styled from 'styled-components';

export const FilterLabel = styled.label`
  margin-right: 4px;
  color: ${p => p.theme.colors.secondaryText};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.semiBold};
`;

export const FilterInput = styled.input`
  display: block;
  width: 200px;
`;
