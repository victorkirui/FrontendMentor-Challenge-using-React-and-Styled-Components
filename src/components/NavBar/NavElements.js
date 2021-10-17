import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

export const NavContainer = styled.div`
    background:transparent;
    height:80px;
    padding:1.5rem;
`
export const NavWrapper = styled.div`
    max-width:1300px;
    margin:0 auto;
    display:flex;
    justify-content: space-between;
    align-items:center;
`
export const Logo = styled.img`
    width:auto;
    height:25px;
`
export const MenuWrapper = styled.div`
    display:block;

    @media screen and (max-width:768px){
        display:none;
    }
`
export const MenuItems = styled.ul`
    list-style:none;
    display:flex;
    justify-content: center;
    align-items:center;
`
export const MenuLink = styled(LinkRouter)`
    text-decoration:none;
    color:#000;
    cursor:pointer;
    margin:0 1rem;
    transition:all 0.3s ease-in-out;

    &:hover{
        transition:all 0.3s ease-in-out;
        color:#555;
    }
`
export const Hamburger = styled.div`
    display:none;

    @media screen and (max-width:768px){
        display:block;
        color:#000;
        width:25px;
        height:25px;
    }
`
export const BurgerIcon = styled(GiHamburgerMenu)`
    color:#000;
    font-size:25px;
`
export const BtnWrapper = styled.div`
    display:block;

    @media screen and (max-width:768px){
        display:none;
    }
`