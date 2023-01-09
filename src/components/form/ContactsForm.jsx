import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { Box } from 'components/Box';

import * as yup from 'yup';

import { ErrorForm, FormInput, FormButton } from './ContactsForm.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('please enter a name'),

  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('please enter a number'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactsForm = ({ onFormSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onFormSubmit(values);
    console.log(values);
    resetForm();
  };

  return (
    <Box width="300px" border="borderBold" p="10px" color="secondaryText">
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <label>
            Name
            <FormInput
              type="text"
              name="name"

              
            />
            <ErrorForm name="name" component="div" />
          </label>
          <label>
            Number
            <FormInput
              type="tel"
              name="number"
              
            />
            <ErrorForm name="number" component="div" />
          </label>
          <FormButton type="submit">Add contact</FormButton>
        </Form>
      </Formik>
    </Box>
  );
};

ContactsForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
