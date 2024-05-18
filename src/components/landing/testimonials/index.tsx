import styled from 'styled-components'

import Area from "../common/Area"
import Testimonial from "./Testimonial"

const StyledArea = styled(Area)`
    background: linear-gradient(to right, black, #191a1be0, black);
    padding: 2.5rem;
    padding-bottom: 2.5rem;

    @media (min-width: 640px) {
        padding-top: 5rem;
        padding-bottom: 5rem;
    }
`;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledTitle = styled.h2`
    font-weight: 100;
    color: rgb(82 82 91);
    font-size: 1.5rem;
    line-height: 2rem;
    margin-bottom: 2.75rem;
    text-align: center;

    @media (min-width: 640px) {
        font-size: 2.25rem;
        line-height: 2.5rem
    }
`;

const TestimonialsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.75rem;
    width: 100%;
    flex-wrap: wrap;

    @media (min-width: 1280px) {
        justify-content: space-between;
    }
`;


export default function Testimonials() {
    return(
        <StyledArea id="testimonials">
            <StyledContainer>
                <StyledTitle>
                    As pessoas estão dizendo...
                </StyledTitle>
                <TestimonialsWrapper>
                    <Testimonial
                        avatar="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2376&q=80"
                        name="Gabriel Junior"
                        title="Desenvolvedor de Software"
                        text="Estava sempre devendo dinheiro na bodega da esquina. Hoje estou conseguindo pagar tudo em dia e até juntar um pouco de dinheiro."
                    />
                    <Testimonial
                        avatar="https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                        name="Juliana Moraes"
                        title="Diretora Comercial"
                        text="Estava sempre devendo dinheiro na bodega da esquina. Hoje estou conseguindo pagar tudo em dia e até juntar um pouco de dinheiro."
                        highlighted
                    />
                    <Testimonial
                        avatar="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2334&q=80"
                        name="Rafaela Vieira"
                        title="Servidora Pública"
                        text="Estava sempre devendo dinheiro na bodega da esquina. Hoje estou conseguindo pagar tudo em dia e até juntar um pouco de dinheiro."
                    />
                </TestimonialsWrapper>
            </StyledContainer>
        </StyledArea>
    )
}