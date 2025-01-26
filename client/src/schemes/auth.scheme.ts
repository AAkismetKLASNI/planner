import * as yup from 'yup';

export const authScheme = yup.object().shape({
  email: yup
    .string()
    .required('Email must be filled')
    .email('Email must be correct')
    .test('email-top-level-domain', 'Email must include domain', (value) => {
      return /\.[a-zA-Z]{2,}$/gi.test(value);
    }),
  password: yup
    .string()
    .required('Password must be filled')
    .min(6, 'Password must be 6-25 characters.')
    .max(25, 'Password must be 6-25 characters.'),
});
