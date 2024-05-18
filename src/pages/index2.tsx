import React from 'react';
import styled from 'styled-components';
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { FaWhatsapp } from 'react-icons/fa';

// Estilos compartilhados
const StyledSection = styled.section`
  padding: 50px;
  color: #333;
`;

// Header
const Header = styled.div`
  background-color: darkred;
  color: gold;
  text-align: center;
  padding: 20px;
`;

const Logo = styled.div`
  img {
    width: 200px;
    height: 200px;
    border-radius: 8px;
  }
`;

const Subtitle = styled.h2`
  font-size: 30px;
`;

const Registration = styled.p`
  font-size: 20px;
`;

const Names = styled.p`
  font-size: 20px;
  color: white;
`;

const WhatsAppLink = styled.a`
  color: gold;
  font-size: 20px;
`;

// About Section
const AboutSection = styled(StyledSection)`
  background-color: #f9f9f9;
`;

// Services Section
const ServicesSection = styled(StyledSection)`
  background-color: #fff;
`;

// Testimonials Section
const TestimonialsSection = styled(StyledSection)`
  background-color: #f9f9f9;
`;

// Contact Section
const ContactSection = styled(StyledSection)`
  background-color: #fff;
`;

// Footer
const Footer = styled.footer`
  background-color: darkred;
  color: gold;
  text-align: center;
  padding: 20px;
`;

// Google Maps Component
const Map = () => (
  <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
    <GoogleMap
      mapContainerStyle={{ height: "400px", width: "100%" }}
      center={{ lat: -5.526597, lng: -47.477873 }}
      zoom={15}
    />
  </LoadScript>
);

const App: React.FC = () => {
  return (
    <div>
      <Header>
        <Logo>
          <img src="/logo.jpg" alt="Logo" />
        </Logo>
      </Header>

      <AboutSection>
        <h3>Sobre Nós</h3>
        <p>Texto sobre o escritório de advocacia e sua missão.</p>
      </AboutSection>

      <ServicesSection>
        <h3>Serviços</h3>
        <ul>
          <li>Consultoria jurídica</li>
          <li>Assessoria em contratos</li>
          <li>Representação em processos judiciais</li>
        </ul>
      </ServicesSection>

      <TestimonialsSection>
        <h3>Depoimentos</h3>
        <p>Depoimentos de clientes satisfeitos com os serviços prestados.</p>
      </TestimonialsSection>

      <ContactSection>
        <h3>Entre em Contato</h3>
        <WhatsAppLink href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={24} color="green" /> Fale Conosco
        </WhatsAppLink>
      </ContactSection>

      <Footer>
        <Logo>
          <img src="/logo.jpg" alt="Logo" />
        </Logo>
        
        <h2>Localização</h2>
        <Map />
        <WhatsAppLink href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={24} color="green" />
        </WhatsAppLink>
      </Footer>
    </div>
  );
}

export default App;