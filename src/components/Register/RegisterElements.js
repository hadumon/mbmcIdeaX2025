import styled from 'styled-components'
import {Link} from 'react-router-dom';

export const Container =styled.div`
    min-height:692px;
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    top:0;
    z-index:0;
    overflow:hidden;
    background:linear-gradient(
        108deg,
        rgb(1, 76, 147)0%,
        rgb(10, 77, 201) 100%
    );
`;

export const FormWrap = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;

    @media screen and (max-width:400px){
        height:80%;
    }
`;

export const Icon = styled(Link)`
    margin-left:32px;
    margin-top:32px;
    text-decoration:none;
    color:white;
    font-weight:700;
    font-size:32px;

    @media screen and (max-width:480px){
        margin-left:16px;
        margin-top:8px;
    }
`;

export const FormContent = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;

    @media screen and (max-width:480px){
        padding:10px;
    }
`;

export const Form = styled.form`
    backgorund:#041322;
    max-width:400px;
    height:auto;
    width:100%;
    z-index:1;
    display:grid;
    margin:0 auto;
    padding:80px 32px;
    border-radius:4px;
    box-shadow:0 1px 3px grba(0,0,0,0.9);

    @media screen and (max-width:400px){
        padding:32px 32px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom:40px;
    color:white;
    font-size:20px;
    font-weight:400;
    text-align:center;
`;

export const FormLabel = styled.label`
    margin-bottom:8px;
    font-size:14px;
    color:white;
`;

export const FormInput = styled.input`
    padding:16px 16px;
    margin-bottom:32px;
    border:none;
    border-radius;4px;
`;

export const FormButton = styled.button`
    background:#013F6A;
    padding:16px 0;
    border:none;
    border-radius:4px;
    color:white;
    font-size:20px;
    cursor:pointer;
`;

export const Text = styled.span`
    text-align:center;
    margin-top:24px;
    color:white;
    font-size:14px;
`