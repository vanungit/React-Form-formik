import React from "react";
import {Formik, Field, ErrorMessage} from 'formik';
import {Form} from 'formik';
import * as Yup from 'yup';
import { validationForm } from "./validation/validation";

const App: React.FC = () => {

    return (
        <div>
            <h1>Create a new account</h1>
            <Formik
                initialValues={{name: '', email: '', password: '', select: '', gender: '', terms: ''}}
                validationSchema={validationForm}
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

                        <Field as="select" name="select">
                            <option value="" label="Select country" hidden={true}/>
                            <option value="Lativa" label="Lativa"/>
                            <option value="Lebanon" label="Lebanon"/>
                            <option value="Lesotho" label="Lesotho"/>
                            <option value="Liberia" label="Liberia"/>
                            <option value="Libia" label="Libia"/>
                        </Field>
                        <ErrorMessage name="select" component="div"/>

                        <label>
                            <Field type="checkbox" name="gender" value="Male"/>
                            Male
                            <Field type="checkbox" name="gender" value="Female"/>
                            Female
                        </label>
                        <ErrorMessage name="gender" component="div"/>

                        <label>
                            <Field type="checkbox" name="terms" value="terms"/>
                            Accept <span>terms</span> and conditions
                        </label>
                        <ErrorMessage name="terms" component="div"/>

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