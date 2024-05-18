import styled from "styled-components"

import Area from "../common/Area"
import Logo from "../common/Logo"
import SocialMedias from "./SocialMedias"

const StyledArea = styled(Area)`
    background-color: black;
    padding-top: 5rem;
    padding-bottom: 5rem;
`;
const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
   
    @media (min-width: 768px) {
        align-items: flex-start;
    }
`;

const FooterText = styled.div`
    margin-top: 0.75rem;
    color: rgb(161 161 170);
    text-align: center;
    @media (min-width: 768px) {
        text-align: left;
    }
`;

const HighlightText = styled.span`
    display: flex;
    gap: 0.375rem;
`

const SimplifyText = styled.span`
    font-weight: 900;
    color: transparent;
    background-clip: text;
    background-image: linear-gradient(to right, #4f46e5, #0891b2);
    -webkit-background-clip: text; 
`;                                                                    

const FooterIcon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3.5rem;
    
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

const Rights = styled.p`
    color: rgb(244 244 245);
    margin-top: 1.75rem;
    text-align: center;
   
    @media (min-width: 768px) {
        margin-top: 0;
    }
`;

const Bold = styled.span`
    font-weight: 700;
`

const Span = styled.span`
    color: rgb(239 68 68);
    font-weight: 700;
`

export default function Footer() {
    return (
        <StyledArea>
            <FooterContainer>
                <Logo />
                <FooterText>
                    <div>Plataforma financeira</div>
                    <HighlightText>que <SimplifyText>simplifica</SimplifyText> sua vida</HighlightText>
                </FooterText>
            </FooterContainer>
            <FooterIcon>
                <SocialMedias />
                <Rights>
                  <Bold>#</Bold><Span>#</Span><Bold>#</Bold> ® {new Date().getFullYear()} - Todos os direitos reservados
                </Rights>
            </FooterIcon>
        </StyledArea>
    )
}
