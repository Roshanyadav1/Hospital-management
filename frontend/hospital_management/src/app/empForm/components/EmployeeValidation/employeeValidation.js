import * as Yup from 'yup';


const Employee_Validation = Yup.object().shape({
    Employee_Name: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, 'Invalid name')
    .required('Required!'),

    Employee_Email: Yup.string()
    .matches(
      /^(?=.*[a-zA-Z]).*^(?!.*@(email|yahoo)\.com).*[A-Za-z0-9]+@[A-Za-z0.9.-]+\.[A-Za-z]{2,4}$/,
      'Invalid email format'
    )
    .required('Required!')
    .test('email-provider', 'Email provider not allowed', (value) => {
      if (/(email|yahoo)\.com$/.test(value)) {
        return false;
      }
      return true;
    }),
    Employee_Number: Yup.string()
    .matches(/^(?!.*(\d)\1{5})[0-9]+$/, 'Invalid phone number')
    .test('is-ten-digits', 'Invalid phone number', (value) => {
      if (value) {
        return value.replace(/[^0-9]/g, '').length === 10;
      }
      return false;
    })
    .required('Required!'),
    Employee_password : Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must contain at least one capital letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[@#$%^&+=_]/, 'Password must contain the special character')
    //   .matches(/_/, 'Password must contain an underscore')
    .required('Password is required'),
    Empcategories: Yup.string().required('Please select a type'),
    Role: Yup.string().required('Please select a role'),
    status: Yup.string().required('Please select status'),

    Created_By: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, 'Invalid name')
    .required('Required!'),

    Updated_By: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, 'Invalid name')
    .required('Required!'),

});

export default Employee_Validation