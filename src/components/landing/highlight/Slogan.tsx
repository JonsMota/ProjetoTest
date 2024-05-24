import styled from 'styled-components'

import { IconArrowRight, IconVideo } from '@tabler/icons-react'

const PhraseContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2.25rem;
    line-height: 2.5rem;
    color: white;
    font-weight: 300;

    @media (min-width: 768px) {
        align-items: flex-start;
    }

    @media (min-width: 1024px) {
        font-size: 3.75rem;
        line-height: 1;
    }
`;

const StyledUm = styled.div`
    display: flex;
    gap: 0.625rem;
`

const StyledRelative = styled.div`
    position: relative;
`

const Highlight = styled.span`
    position: relative;
    &::before {
        content: "";
        position: absolute;
        bottom: 0.25rem;
        left: 0;
        width: 100%;
        border-bottom: 0.5rem solid #6B46C1;
        border-color: rgb(168 85 247);
        transform: rotate(-2deg);
    }
`;

const StyledX = styled.span`
    display: flex;
    align-items: center;
    padding: 0.25rem;
    position: relative;
    color: rgb(0 0 0);
`

const Money = styled.span`
    position: absolute;
    top: 0.125rem;
    left: 0;
    width: 100%;
    height: 83.33%; 
    background-color: #fde34f;
    border-radius: 0.125rem;
    transform: rotate(-1deg);
`

const MoneyAfter = styled.span`
    position: relative;
    transform: rotate(2deg);
    z-index: 20;
`

const SloganContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.25rem;
`;

const StyledSubtitle = styled.div`
    text-align: center;
    font-weight: 100;
    color: rgb(113 113 122);
    font-size: 0.875rem;
    line-height: 1.25rem;

    @media (min-width: 640px) {
        text-align: left;
    }

    @media (min-width: 1024px) {
        font-size: 1.125rem/* 18px */;
        line-height: 1.75rem/* 28px */;
    }

`

const StyledContainerButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    @media (min-width: 640px) {
        justify-content: flex-start;
    }
`

const StartButton = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    background-image: linear-gradient(to right, #4f46e5, #0891b2);
    color: white;
    padding: 0.625rem 1.25rem;
    border-radius: 0.375rem;
`;

const StyledB = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    color: rgb(212 212 216);
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
`

const StyledIniciar = styled.span`
    font-weight: 100;
    font-size: 1rem;
    line-height: 1.5rem;

    @media (min-width: 768px) {
        font-size: 0.875rem;
        line-height: 1.25rem;
    }
`

const StyledAgora = styled.span`
    display: none;
    
    @media (min-width: 640px) {
        display: inline;
    }
`

const StyledIconArrowRight = styled.p`
    display: none;

    @media (min-width: 1024px) {
        display: inline;
    }
`


const WatchButtonBefore = styled.span`
    font-weight: 100;
    font-size: 1rem;
    line-height: 1.5rem;
    
    @media (min-width: 768px) {
        font-size: 0.875rem;
        line-height: 1.25rem;
    }
`

const WatchButtonAfter = styled.span`
    display: none;
    @media (min-width: 640px) {
        display: inline;
    }

`

export default function Slogan() {
    function renderPhrase() {
        return (
            <PhraseContainer>
                <StyledUm>
                    <Highlight>
                        <StyledRelative>Melhor</StyledRelative>                      
                    </Highlight>
                    <div>maneira</div>
                </StyledUm>
                <StyledUm>
                    <span>de</span>
                    <span>gerenciar</span>
                </StyledUm>
                
                <StyledUm>
                    <span>seus</span>
                    <StyledX>
                        <Money />
                        <MoneyAfter>
                            direitos
                        </MoneyAfter>
                    </StyledX>
                </StyledUm>
            </PhraseContainer>
        )
    }

    return (
        <SloganContainer>
            {renderPhrase()}
            <StyledSubtitle>
            
            Escritório jurídico que descomplica seus direitos trabalhistas!
            
            </StyledSubtitle>
            <StyledContainerButton>
                <StartButton>
                    <StyledIniciar>
                        Iniciar <StyledAgora>Agora</StyledAgora>
                    </StyledIniciar>
                    <StyledIconArrowRight>
                        <IconArrowRight stroke={1}/>
                    </StyledIconArrowRight>
                </StartButton>
                <StyledB>
                    <IconVideo stroke={1}/>
                    <WatchButtonBefore>
                        <WatchButtonAfter> Assista o</WatchButtonAfter> Video
                    </WatchButtonBefore>
                </StyledB>
            </StyledContainerButton>
        </SloganContainer>
    )
}