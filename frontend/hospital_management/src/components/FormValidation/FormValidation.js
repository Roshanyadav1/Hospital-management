import * as Yup from 'yup';

export const DOCTOR_VALIDATION = Yup.object().shape({
    doc_Id: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, 'Invalid name')
    .required('Required!'),
    disease_Specialist: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, 'Invalid name')
    .required('Required!'),
    doc_Type: Yup.string().required('Please select a status'),
    Created_At: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, 'Invalid name')
    .required('Required!'),
    Updated_At: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, 'Invalid name')
    .required('Required!'),
});

export const Employee_Validation = Yup.object().shape({
    employee_name: Yup.string()
      .matches(/^[a-zA-Z\s]*$/, 'Invalid name')
      .required('Required!'),
  
      employee_email: Yup.string()
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
      employee_number: Yup.string()
      .matches(/^(?!.*(\d)\1{5})[0-9]+$/, 'Invalid phone number')
      .test('is-ten-digits', 'Invalid phone number', (value) => {
        if (value) {
          return value.replace(/[^0-9]/g, '').length === 10;
        }
        return false;
      })
      .required('Required!'),
      employee_password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/[A-Z]/, 'Password must contain at least one capital letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .matches(/[@#$%^&+=_]/, 'Password must contain the special character')
      //   .matches(/_/, 'Password must contain an underscore')
      .required('Password is required'),
      employee_type: Yup.string().required('Please select a type'),
      employee_role: Yup.string().required('Please select a role'),
  
      employee_status: Yup.string().required('Please select a status'),
  
  
      created_by: Yup.string()
      .matches(/^[a-zA-Z\s]*$/, 'Invalid name')
      .required('Required!'),
  
      updated_by: Yup.string()
      .matches(/^[a-zA-Z\s]*$/, 'Invalid name')
      .required('Required!'),
  
  });