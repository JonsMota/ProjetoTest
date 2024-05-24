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
                    title="Assessoria jurídica trabalhista completa e de fácil utilização"
                    subtitle="Aqui você obtém controle total dos seus direitos trabalhistas com uma assessoria clara e compreensível. O caminho para a segurança jurídica inicia-se aqui!”"
                />
                <Benefit
                    image={vantagem2}
                    title="Estruturado para que nenhum direito seu seja esquecido"
                    subtitle="Monitore e gerencie seus processos trabalhistas diariamente. A organização mensal proporciona um controle transparente do andamento do seu caso!"
                    reverse
                />
                <Benefit
                    image={vantagem3}
                    title="“Ideal para o planejamento da sua carreira e proteção dos seus direitos trabalhistas."
                    subtitle="Nossa premissa número 1 é oferecer um serviço jurídico que simplifica o entendimento dos seus direitos, tornando o planejamento trabalhista parte integrante da sua vida profissional"
                />
            </StyledBenefit>
        </BenefitsContainer>
    )
}