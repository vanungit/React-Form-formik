import styled from 'styled-components';
import {Field, Form, ErrorMessage} from 'formik';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {icons} from '../icons';

export const StyledCounter = styled.div`
    top: 0px;
    left: 0px;
    width: 1920px;
    height: 1015px;
    background: #102250 0% 0% no-repeat padding-box;
    opacity: 1;
    position:relative;
    display:flex;
    justify-content:center;
`
export const LayoutProperties = styled.div`
    top: 286px;
    width: 400px;
    height: 605px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 8px;
    opacity: 1;
    position:relative;
`
export const Title = styled.div`
    position:relative;
    top:32px;
    width: 271px;
    margin:0 auto;
    height: 34px;
    text-align: left;
    font: normal normal bold 28px Roboto;
    letter-spacing: 0px;
    color: #222222;
    opacity: 1;
    padding-bottom:37px;
  
`;
export const Input = styled(Field)`
    position:relative;
    top:${props => (props.padding == 52) ? "47px" : (props.padding == 51) ? "57px" : (props.padding == 18) ? "37px" : null};
    padding-left:${props => props.padding ? (props.padding) + "px" : props.id ? "18px" : null};
    width: ${props => props.padding ? (333 - props.padding) + "px" : "333px"};
    height: 50px;
    background: #F5F8FA 0% 0% no-repeat padding-box;
    border-radius: 8px;
    opacity: 1;
    text-align: left;
    font: normal normal normal 17px Roboto;
    letter-spacing: 0px;
    border:none;
`;

export const SelectDiv = styled.div`
 & > select {
    position:relative;
    top: 67px;
    padding-left:18px;
    width:333px;
    height: 50px;
    border-radius: 8px;
    opacity: 1;
    text-align: left;
    font: normal normal normal 17px Roboto;
    letter-spacing: 0px;
    border:none;  
    appearance:none;
       background: url(${icons.down}) 89% / 2.5% no-repeat #F5F8FA;
}
    &> select > option{
    text-align: left;
    font: normal normal normal 17px Roboto;
    letter-spacing: 0px;
    height:40px;
    color: #222222;
    opacity: 1;
    }
  
    & > select:focus{
        background: url(${icons.up}) 89% / 2.5% no-repeat ;
        
    }
    & > select:blur){
        background: url(${icons.down}) 89% / 2.5% no-repeat ;
    }
`
export const ErrorMassageStyle = styled(ErrorMessage)`
    position:relative;
    color:#E82828;
    text-align: left;
    font: normal normal normal 13px Roboto;
    letter-spacing: 0px;
    opacity: 1;
    top:${props => props.name == "name" ? "38px" : props.name == "email" ? "48px" : props.name == "password" ? "57px" : props.name == "gender" ? "0" : props.name == "select" ? "68px" : 0};
    left:17px;
`
export const FormStyled = styled(Form)`
    width:343px;
    margin:0 auto;
`;
export const ErrorDiv = styled.div`
    position:relative;
    height:10px;
    width:200px;
`;
export const Img = styled.img`
    position:absolute;
    margin-top: ${props => props.id == "mass" ? "65px" : props.id == "pass" ? "73px" : null};
    margin-left:15px;
    z-index: 2;
`;
export const LabelDiv = styled.label`
    width: 14px;
    height: 14px;
    left: ${props => props.id == "Male" ? "32px" : props.id == "Female" ? "117px" : "32px"};
    border-radius: 3.5px;
    border: 1.5px solid #0094FF;
    position: absolute;
    border-radius:${props => props.id == "terms" ? "20%" : "50%"}
`;
export const FontAwesomeToggleMale = styled.span``
export const FontAwesomeToggleFemale = styled.span``
export const ToggleText = styled.span`
    padding: ${props => props.id === "Male" ? "0 8px" : "0 25px"};
    `
export const ToggleCheckbox = styled.div`
    margin-top:92px;
`
export const CheckboxChecked = styled.div`
    margin-top:26px;
`
export const FontAwesomeToggleTerms = styled.span`
    opacity:0;
`
export const CheckedSpan = styled.span`
    color:#0094FF;
`
export const CheckedText = styled.span`
    font: normal normal normal 17px Roboto;
    letter-spacing: 0px;
    opacity: 1;
    position:absolute;
    margin-left: 8px;
    margin-top: -1px;
`
export const FontAwesomeStyled = styled(FontAwesomeIcon)`
    width: 11px !important;
    position: absolute;
    top: ${props => props.id == "faCheck" ? "465.3px" : "409.55px"};
    left: ${props => props.id == "circleFemale" ? "120px" : "35px"};
    color: #0094FF
    
`;
export const CheckboxField = styled(Field)`
     &:checked + ${FontAwesomeToggleTerms} {
       opacity:1;
        }
    background: #FFFFFF 0% 0% no-repeat padding-box;
    opacity:0;
`;
export const Button = styled.button`
    margin-top:23px;
     text-align: center;
    font: normal normal normal 18px/22px Roboto;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    width: 343px;
    height: 62px;
    background: ${props => props.id === 'blue' ? "#0094FF" : "#A2A2A2"} 0% 0% no-repeat padding-box;
    border-radius: 31px;
    border:none;
    outline: none;
    &:disabled{
        background: url(${icons.loader}) no-repeat center ;  
        width:40px;
         animation-name: breath-animation;
         animation-duration: 1s;
         animation-iteration-count: infinite;
         @keyframes breath-animation {
         0% {  transform: rotate(0deg); }
          100% {  transform: rotate(360deg); }
    }
    opacity:0.2;
    position:absolute;
    top:490px;
    left 180px;
}

`





