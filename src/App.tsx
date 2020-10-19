import React, {useState} from "react";
import "./FontAwesome"
import {Formik, Field, ErrorMessage} from 'formik';
import {validationForm} from "./validation/validation";
import {initialValue} from "./utils/initialValue";
import {icons} from './icons/index'
import {Title, StyledCounter, LayoutProperties, Input,FormStyled, ErrorMassageStyle,ErrorDiv} from "./styled-component/styled";

const App: React.FC = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <StyledCounter>
            <LayoutProperties>
                <Title>Create a new account</Title>
                <Formik
                    initialValues={initialValue}
                    validationSchema={validationForm}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 1000);
                    }}
                >
                    {({isSubmitting}) => (
                        <FormStyled>

                            <Input type="text" name="name" padding={"18"}/>
                            <ErrorDiv>
                            <ErrorMassageStyle name="name" component="div" />
                            </ErrorDiv>
                            <Input type="email" name="email" padding={"52"}/>
                            <ErrorDiv>
                            <ErrorMassageStyle name="email" component="div"/>
                            </ErrorDiv>
                            <Input type="password" name="password" padding={"52"}/>
                            <img src={icons.pass} alt=""/>
                            <ErrorDiv>
                            <ErrorMassageStyle name="password" component="div"/>
                            </ErrorDiv>

                            <Input as="select" name="select">
                                <option value="" label="Select country" hidden={true}/>
                                <option value="Lativa" label="Lativa"/>
                                <option value="Lebanon" label="Lebanon"/>
                                <option value="Lesotho" label="Lesotho"/>
                                <option value="Liberia" label="Liberia"/>
                                <option value="Libia" label="Libia"/>
                            </Input>
                            <ErrorMassageStyle name="select" component="div"/>

                            <label>
                                <Field type="checkbox" name="gender" value="Male"/>
                                Male
                                <Field type="checkbox" name="gender" value="Female"/>
                                Female
                            </label>
                            <ErrorMassageStyle name="gender" component="div"/>

                            <label>
                                <Field type="checkbox" name="terms" value="terms"/>
                                Accept <span>terms</span> and conditions
                            </label>
                            <ErrorMessage name="terms" component="div"/>

                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </FormStyled>
                    )}
                </Formik>
            </LayoutProperties>
        </StyledCounter>
    )
}

export default App