import React, {useState, useEffect} from "react";
import "./FontAwesome"
import {Formik, Field} from 'formik';
import {validationForm} from "./validation/validation";
import {initialValue} from "./utils/initialValue";
import {icons} from './icons';
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import {faCircle} from '@fortawesome/free-solid-svg-icons'
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
    FontAwesomeStyled,
    FontAwesomeToggleMale,
    FontAwesomeToggleFemale,
    FontAwesomeToggleTerms,
    ToggleCheckbox,
    Button,
    CheckboxChecked,
    ToggleText,
    CheckedText,
    CheckedSpan,
    SelectDiv
} from "./styled-component/styled";


const App: React.FC = () => {
    const [toggle, setToggle] = useState();
    const [errors, setErrors] = useState();
    const [dirty, setDirty] = useState();
    const [onBlue, setBlue] = useState('');

    useEffect(() => {
        if (dirty) {
            const propOwn = Object.getOwnPropertyNames(errors);
            if (propOwn) {
                if (propOwn.length == 0) {
                    setBlue("blue")
                }
            }
        }
    }, [errors]);
    return (
        <StyledCounter>
            <LayoutProperties>
                <Title>Create a new account</Title>
                <Formik
                    initialValues={initialValue}
                    validationSchema={validationForm}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            console.log(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 10000);
                    }}>
                    {({isSubmitting, errors, dirty}) => (

                        <FormStyled>
                            {setErrors(errors)}
                            {setDirty(dirty)}
                            <Input type="text" name="name" padding="18" placeholder="Enter your name"/>
                            <ErrorDiv>
                                <ErrorMassageStyle name="name" component="div"/>
                            </ErrorDiv>

                            <Img src={icons.mass} alt="" id="mass"/>
                            <Input type="email" name="email" padding="52" placeholder="Email"/>
                            <ErrorDiv>
                                <ErrorMassageStyle name="email" component="div"/>
                            </ErrorDiv>

                            <Img src={icons.pass} alt="" id="pass"/>
                            <Input type="password" name="password" padding="51" placeholder="Password"/>

                            <ErrorDiv>
                                <ErrorMassageStyle name="password" component="div"/>
                            </ErrorDiv>
                            <SelectDiv>
                                <Field as="select" id="select" name="select">
                                    <option value="" label="Select country" hidden={true}/>
                                    <option value="Lativa" label="Lativa"/>
                                    <option value="Lebanon" label="Lebanon"/>
                                    <option value="Lesotho" label="Lesotho"/>
                                    <option value="Liberia" label="Liberia"/>
                                    <option value="Libia" label="Libia"/>
                                </Field></SelectDiv>

                            <ErrorDiv>
                                <ErrorMassageStyle name="select" component="div"/>
                            </ErrorDiv>

                            <ToggleCheckbox>
                                <CheckboxField type="checkbox" id="Male" checked={toggle === "Male"}
                                               name="gender" onClick={(e: any) => setToggle(e.target.value)}
                                               value="Male"/>
                                <ToggleText id="Male">Male</ToggleText>
                                <LabelDiv htmlFor="Male" id="Male"/>
                                <FontAwesomeToggleMale hidden={!(toggle === "Male")}>
                                    <FontAwesomeStyled icon={faCircle} id="circleMale"/>
                                </FontAwesomeToggleMale>

                                <CheckboxField type="checkbox" checked={toggle === "Female"}
                                               onClick={(e: any) => setToggle(e.target.value)} name="gender"
                                               value="Female" id="Female"/>

                                <LabelDiv htmlFor="Female" id="Female"/>
                                <FontAwesomeToggleFemale hidden={!(toggle === "Female")}>
                                    <FontAwesomeStyled icon={faCircle} id="circleFemale"/>
                                </FontAwesomeToggleFemale>
                                <ToggleText id="Female">Female</ToggleText>
                                <ErrorDiv>
                                    <ErrorMassageStyle name="gender" component="div"/>
                                </ErrorDiv>
                            </ToggleCheckbox>
                            <CheckboxChecked>
                                <CheckboxField id="terms" type="checkbox" name="terms" value="terms"/>
                                <FontAwesomeToggleTerms>
                                    <FontAwesomeStyled icon={faCheck} id="faCheck"/>
                                </FontAwesomeToggleTerms>
                                <LabelDiv htmlFor="terms" id="terms"/>
                                <CheckedText>
                                    Accept <CheckedSpan>terms</CheckedSpan> and <CheckedSpan>conditions</CheckedSpan>
                                </CheckedText>
                                <ErrorDiv>
                                    <ErrorMassageStyle name="terms" component="div"/>
                                </ErrorDiv>
                            </CheckboxChecked>

                            <Button type="submit" disabled={isSubmitting} id={onBlue}>
                                Sign Up
                            </Button>

                        </FormStyled>
                    )}
                </Formik>
            </LayoutProperties>
        </StyledCounter>
    )
}

export default App