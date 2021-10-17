import React from 'react';
import {
    InfoContainer,
    InfoWrapper,
    Column1,
    Tagline,
    Headline,
    Column2,
    ColumnCard,
    Subheadline,
    Number,
    Subtitle
} from './InfoElements';

const Info = () => {
    return (
        <>
            <InfoContainer>
                <InfoWrapper>
                    <Column1>
                        <Tagline>What’s different about Manage?</Tagline>
                        <Headline>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</Headline>
                    </Column1>
                    <Column2>
                        <ColumnCard>
                            <Subheadline><Number>01</Number>Track company-wide progress</Subheadline>
                            <Subtitle>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</Subtitle>
                        </ColumnCard>
                        <ColumnCard>
                            <Subheadline><Number>02</Number>Advanced built-in reports</Subheadline>
                            <Subtitle>Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</Subtitle>
                        </ColumnCard>
                        <ColumnCard>
                            <Subheadline><Number>03</Number>Everything you need in one place</Subheadline>
                            <Subtitle>Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</Subtitle>
                        </ColumnCard>
                        
                    </Column2>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default Info
