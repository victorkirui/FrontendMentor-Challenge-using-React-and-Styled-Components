import styled from 'styled-components';

export const Button = styled.div`
    background:red;
    color:#fff;
    padding:${({large}) => ( large ? '15px 40px' : '10px 25px')};
    border-radius:50px;
    border:none;
    outline:none;
    cursor:pointer;

    &:hover{
        background:green;
        transition:all 0.3s ease-in-out;
    }
`