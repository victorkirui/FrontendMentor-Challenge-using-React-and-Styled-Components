import React from 'react';
import { Button } from '../ButtonElements';
import LogoImg from '../../images/logo.svg';
import {
    NavContainer,
    NavWrapper,
    Logo,
    MenuWrapper,
    MenuItems,
    MenuLink,
    Hamburger,
    BurgerIcon,
    BtnWrapper
} from './NavElements';

const Nav = () => {
    return (
        <>
            <NavContainer>
                <NavWrapper>
                    <Logo src={LogoImg} />
                    <MenuWrapper>
                        <MenuItems>
                            <MenuLink to="/">Pricing</MenuLink>
                            <MenuLink to="/">Product</MenuLink>
                            <MenuLink to="/">About Us</MenuLink>
                            <MenuLink to="/">Careers</MenuLink>
                            <MenuLink to="/">Community</MenuLink>
                        </MenuItems>
                    </MenuWrapper>
                    <Hamburger>
                        <BurgerIcon  />
                    </Hamburger>
                    <BtnWrapper>
                        <Button to="/getstarted">Get Started</Button>
                    </BtnWrapper>
                </NavWrapper>
            </NavContainer>
        </>
    )
}

export default Nav
