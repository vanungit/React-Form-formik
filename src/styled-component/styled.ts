import styled from 'styled-components';
import {Field, Form, ErrorMessage} from 'formik';

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
margin-top:21px;
top:8px;
padding-left:${props => (props.padding)+"px"};
width: ${props=> (333 - props.padding)+"px"};
height: 50px;
background: #F5F8FA 0% 0% no-repeat padding-box;
border-radius: 8px;
opacity: 1;
text-align: left;
font: normal normal normal 17px Roboto;
letter-spacing: 0px;
color: #A2A2A2 !important;
border:none;
 &:before {
 background: transparent url('../icons/Group 845.png') 0% 0% no-repeat padding-box; 
 >&: {
 position:absolute;
 }
 }
`;
export const ErrorMassageStyle = styled(ErrorMessage)`
position:relative;
color:#E82828;
text-align: left;
font: normal normal normal 13px Roboto;
letter-spacing: 0px;
opacity: 1;
top:16px;
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
