import React, {useState} from "react";
import "./FontAwesome"
import {Formik, ErrorMessage} from 'formik';
import {validationForm} from "./validation/validation";
import {initialValue} from "./utils/initialValue";
import {icons} from './icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons'


import {
    Title,
    StyledCounter,
    LayoutProperties,
    Input,
    FormStyled,
    ErrorMassageStyle,
    ErrorDiv,
    Img,
    CheckboxField,
    LabelDiv,
    FontAwesomeStyled

} from "./styled-component/styled";

const App: React.FC = () => {
    const [toggle, setToggle] = useState()
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
                                <ErrorMassageStyle name="name" component="div"/>
                            </ErrorDiv>

                            <Img src={icons.mass} alt="" id={"mass"}/>
                            <Input type="email" name="email" padding={"52"}/>
                            <ErrorDiv>
                                <ErrorMassageStyle name="email" component="div"/>
                            </ErrorDiv>

                            <Img src={icons.pass} alt="" id={"pass"}/>
                            <Input type="password" name="password" padding={"52"}/>

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
                            <ErrorDiv>
                                <ErrorMassageStyle name="select" component="div"/>
                            </ErrorDiv>



                                    <CheckboxField type="checkbox" id={"Male"} checked={toggle === "Male"}
                                                   onChange={(e: any) => setToggle(e.target.value)} name="gender"
                                                   value="Male" />
                                                   Male
                            {/*<LabelDiv htmlFor="terms" id="male"/>*/}


                                    <CheckboxField type="checkbox" checked={toggle === "Female"}
                                                   onChange={(e: any) => setToggle(e.target.value)} name="gender"
                                                   value="Female"/>
                            {/*<LabelDiv htmlFor="terms" id="female"/>*/}
                                    Female

                            <ErrorDiv>
                                <ErrorMassageStyle name="gender" component="div"/>
                            </ErrorDiv>



                            <CheckboxField id="terms" type="checkbox" name="terms" value="terms"/>
                                 <FontAwesomeStyled icon={faCheck} />
                                <LabelDiv htmlFor="terms" id="terms"/>
                                Accept <span>terms</span> and conditions

                            <ErrorDiv>
                                <ErrorMessage name="terms" component="div"/>
                            </ErrorDiv>
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