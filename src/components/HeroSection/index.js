import React from 'react';
import { Button } from '../ButtonElements';
import HeroImage  from '../../images/illustration-intro.svg';
import { 
    HeroContainer,
    HeroWrapper,
    HeroContent,
    HeroH1,
    HeroP,
    HeroImg,
    Img } from './HeroElements';

const HeroSection = () => {
    return (
        <>
            <HeroContainer>
                <HeroWrapper>
                    <HeroContent>
                        <HeroH1>Bring everyone together to build better products</HeroH1>
                        <HeroP>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view. </HeroP>
                        <Button to="/">Get Started</Button>
                    </HeroContent>
                    <HeroImg>
                        <Img src={HeroImage} />
                    </HeroImg>
                </HeroWrapper>
            </HeroContainer>
        </>
    )
}

export default HeroSection
