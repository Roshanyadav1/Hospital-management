import * as Yup from 'yup';

const DISEASE_VALIDATION = Yup.object().shape({
    d_Id: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, 'Invalid name')
    .required('Required!'),
    d_Name: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, 'Invalid name')
    .required('Required!'),
    d_Status: Yup.string().required('Please select a status'),
    created_At: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, 'Invalid name')
    .required('Required!'),
    updated_At: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, 'Invalid name')
    .required('Required!'),

})

export default DISEASE_VALIDATION;