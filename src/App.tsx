import React from "react";
import { Formik, Field, ErrorMessage } from 'formik';
import {Form} from 'formik';
import {useState} from 'react';
import * as Yup from 'yup';

const App:React.FC = () => {
 const [state,setState]= useState(true)

    return (
        <div>
            <h1>Create a new account</h1>
            <Formik
                initialValues={{name: '', email: '', password: '', select: ''}}
                validationSchema={Yup.object({
                    name: Yup.string().matches(/^[A-Za-z]+$/, "Only English letters").required("Required *"),
                    email:Yup.string()
                        .email("invalid email address")
                        .required("Required"),
                    password:Yup.string()
                        .required('No password provided.')
                        .min(8, 'Password is too short - should be 8 chars minimum.'),

                })}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <Field type="text" name="name"/>
                        <ErrorMessage name="name" component="div"/>
                        <Field type="email" name="email"/>
                        <ErrorMessage name="email" component="div"/>
                        <Field type="password" name="password"/>
                        <ErrorMessage name="password" component="div"/>
                        <select name="select"
                                value="Select country"
                        >
                            <option value="Select country" label="Select country" selected/>
                            <option value="Lativa" label="Lativa"/>
                            <option value="Lebanon" label="Lebanon"/>
                            <option value="Lesotho" label="Lesotho"/>
                            <option value="Liberia" label="Liberia"/>
                            <option value="Libia" label="Libia"/>
                        </select>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
export default App