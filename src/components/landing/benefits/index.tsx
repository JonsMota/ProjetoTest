import styled from "styled-components"

import Area from "../common/Area"
import Benefit from "./Benefit"
import vantagem1 from '../../../../public/vantagem-1.jpg'
import vantagem2 from '../../../../public/vantagem-2.jpg'
import vantagem3 from '../../../../public/vantagem-3.jpg'

const BenefitsContainer = styled(Area)`
    background-color: black;
    padding-top: 4rem;
    padding-bottom: 4rem;
    
    
    @media (min-width: 640px) {
        padding-top: 9rem;
        padding-bottom: 9rem;
    }
`

const StyledBenefit = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;  
    row-gap: 4rem;

    @media (min-width: 640px) {
        row-gap: 9rem;
    }
`
 
export default function Benefits() {
    return (
        <BenefitsContainer id="benefits">
            <StyledBenefit>
                <Benefit
                    image={vantagem1}
                    title="Gerenciador financeiro completo e simples de usar"
                    subtitle="Aqui você consegue ter controle completo das suas finanças e uma visualização fácil de entender. O caminho da economia começa aqui!"
                />
                <Benefit
                    image={vantagem2}
                    title="Organizado para você nunca mais esquecer uma conta"
                    subtitle="Visualize e acompanhe as suas finanças dia a dia. A organização mensal vai te ajudar a ter um controle claro das receitas e despesas!"
                    reverse
                />
                <Benefit
                    image={vantagem3}
                    title="Ideal para planejamento financeiro"
                    subtitle="Nosso princípio número 1 é ser uma plataforma que torne o controle financeiro simples, então o planejamento se torna algo natural!"
                />
            </StyledBenefit>
        </BenefitsContainer>
    )
}