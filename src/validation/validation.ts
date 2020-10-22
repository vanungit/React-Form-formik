import * as Yup from "yup";

export const validationForm = Yup.object().shape({
    name: Yup.string().matches(/^[A-Za-z]+$/, 'Please enter a valid name').required('Please enter a valid name'),
    email: Yup.string()
        .email('Please enter a valid email address')
        .required('Please enter a valid email address'),
    password: Yup.string()
        .required('No password provided.')
        .min(8, 'Password must contain at last 6 symbols.'),
    select: Yup.string().required('You must be select your country'),
    gender: Yup.string().required('You must select the gender'),
    terms: Yup.string().required('You must accept the policies'),

})