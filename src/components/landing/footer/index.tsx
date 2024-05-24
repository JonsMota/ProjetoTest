import styled from "styled-components"
import Area from "../common/Area"
import Logo from "../common/Logo"
import SocialMedias from "./SocialMedias"
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { FaWhatsapp } from 'react-icons/fa';

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
        flex-direction: row; // Altere a direção para row
        justify-content: space-between; // Adicione espaço entre os itens
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
const ContactSection = styled.div`
    /* Estilos para a seção de contato */
`;

const WhatsAppLink = styled.a`
    /* Estilos para o link do WhatsApp */
`;

const MapSection = styled.div`
    /* Estilos para a seção do mapa */
`;


export default function Footer() {
    return (
        <StyledArea>
            <FooterContainer>
                <div>
                    <Logo />
                    <FooterText>
                        <div>Escritório jurídico que</div>
                        <HighlightText><SimplifyText>descomplica</SimplifyText>seus direitos trabalhistas!</HighlightText>
                    </FooterText>
                </div>
                <ContactSection>
                    <h3>Entre em Contato</h3>
                    <WhatsAppLink href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size={24} color="green" /> Fale Conosco
                    </WhatsAppLink>
                </ContactSection>
                <div>
                    <h2 style={{color : 'yellow'}}>Localização</h2>
                    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                        <GoogleMap
                            mapContainerStyle={{ width: '400px', height: '400px' }}
                            center={{ lat: -3.745, lng: -38.523 }}
                            zoom={10}
                        />
                    </LoadScript>
                </div>
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