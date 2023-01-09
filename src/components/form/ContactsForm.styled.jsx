import { ErrorMessage, Field } from 'formik';
import styled from 'styled-components';

export const ErrorForm = styled(ErrorMessage)`
  color: red;
  font-size: ${p => p.theme.fontSizes.m};
`;

export const FormInput = styled(Field)`
  display: block;
  margin-bottom: 20px;
`;

export const FormButton = styled.button`
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.mainBg};
  border: ${p => p.theme.borders.borderNorm};
  width: 160px;
  padding: 5px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.secondaryBg};
  }
`;
