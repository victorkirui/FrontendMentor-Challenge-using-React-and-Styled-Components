import styled from 'styled-components';
// import {Link as LinkScroll} from 'react-scroll';

export const HeroContainer = styled.div`
    min-height:100vh;
    width:100vw;
`
export const HeroWrapper = styled.div`
    max-width:1300px;
    padding:1.5rem;
    display:grid;
    grid-template-columns: minmax(auto,1fr);
    grid-template-areas: 'col1 col2';

    @media screen and (max-width:768px){
        grid-template-areas: 'col2''col1';
    }
`
export const HeroContent = styled.div`
    max-width:500px;
    grid-area:col1;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @media screen and (max-width:768px){
        align-items: center;
    }
`
export const HeroImg = styled.div`
    max-width:600px;
    height:100%;
    width:100%;
    grid-area:col2;
`
export const HeroH1 = styled.h1`
    font-size:50px;
    line-height:1.1em;

    @media screen and (max-width:768px){
        font-size:35px;
        text-align:center;
    }
`
export const HeroP = styled.p`
    font-size:18px;
    line-height:1.8em;
    margin:20px 0px;

    @media screen and (max-width:768px){
        text-align:center;
        font-size:17px;
        line-height:1.7em;
    }
`
export const Img = styled.img`
    height:100%;
    width:100%;
`
