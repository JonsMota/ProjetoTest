import styled from "styled-components"
import React from "react"

import ResponsiveImage from "../common/ResponsiveImage"

export interface BenefitProps {
    image: any
    title: string
    subtitle: string
    reverse?: boolean
}

const BenefitContainer = styled.div<{ reverse: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    gap: 1.5rem;
    @media (min-width: 640px) {
        flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
    }
`;

const StyledResponsiveImage = styled(ResponsiveImage)<{ reverse: boolean }>`
    transform: ${props => props.reverse ? 'rotate(6deg)' : 'rotate(-6deg)'};

    @media (min-width: 640px) {
        transform: ${props => props.reverse ? 'rotate(6deg)' : 'rotate(-6deg)'};
    }
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    row-gap: 1.5rem;
    gap: 1.5rem;
    width: 100%;
    text-align: center;
    
    @media (min-width: 640px) {
        width: 350px;
        text-align: left;
    }

    
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    font-weight: 900;
    font-size: 1.5rem;
    line-height: 2rem;

    @media (min-width: 640px) {
        font-size: 2.25rem;
        line-height: 2.5rem;
    }
`;

const Subtitle = styled.span`
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.5rem;
    color: rgb(113 113 122);

    @media (min-width: 640px) {
        font-size: 1.125rem;
        line-height: 1.75rem
    }
`

export default function Benefit({ image, title, subtitle, reverse = false }: BenefitProps) {
    return (
        <BenefitContainer reverse={reverse}>
            <StyledResponsiveImage
                image={image}
                reverse={reverse}
            />
            <TextContainer>
                <Title>{title}</Title>
                <Subtitle>
                    {subtitle}
                </Subtitle>                
            </TextContainer>
        </BenefitContainer>
    )
}
