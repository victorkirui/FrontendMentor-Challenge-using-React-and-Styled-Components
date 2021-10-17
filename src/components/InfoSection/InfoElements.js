import styled from 'styled-components';

export const InfoContainer = styled.div`
    background:#fff;
`
export const InfoWrapper = styled.div`
    max-width:1300px;
    padding:1.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width:768px){
        grid-template-columns: 1fr;
    }
`
export const Column1 = styled.div`
    display:block;
`
export const Tagline = styled.h2`
    font-size:50px;
    line-height:1.3em;

    @media screen and (max-width:768px){
        text-align:center;
        font-size:35px;
    }
`
export const Headline = styled.p`
    font-size:17px;
    line-height:1.5em;
    margin:20px 0px;
    max-width:500px;

    @media screen and (max-width:768px){
        text-align:center;
    }
`
export const Column2 = styled.div`
    display:grid;
    grid-gap:20px;
    max-width:500px;
    justify-self: flex-end;

    @media screen and (max-width:768px){
        margin-top:30px;
    }
`
export const ColumnCard = styled.div`
    display:grid;
`
export const Subheadline= styled.h3`
    font-size:20px;
    line-height:1.3em;

    @media screen and (max-width:768px){
        background:yellow;
        border-radius:50px 0px 0px 50px;
    }
`
export const Number= styled.span`
    border-radius:50px;
    padding:5px 15px;
    margin-right:10px;
    font-size:17px;
    color:#fff;
    background:red;
    border:none;
    outline:none;
`
export const Subtitle = styled.p`
    font-size:17px;
    line-height:1.5em;
    margin:20px;
    margin-left:40px;

    @media screen and (max-width:768px){
        margin-left:0px;
    }
`
