import styled from 'styled-components';

export const ContactsItem = styled.li`
  margin-bottom: 15px;
  color: ${p => p.theme.colors.secondaryText};
  font-size: ${p => p.theme.fontSizes.m};
`;

export const ContactName = styled.span`
  margin-right: 3px;
  font-weight: ${p => p.theme.fontWeights.semiBold};
`;

export const DeleteBtn = styled.button`
  margin-left: 10px;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.mainBg};
  border: ${p => p.theme.borders.borderNorm};
  width: 60px;
  padding: 2px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.secondaryBg};
`;
