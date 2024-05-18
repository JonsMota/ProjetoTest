import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #0e0303;
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

const App: React.FC = () => {
  return (
    <div> {/* Wrap the multiple Container elements inside a parent div */}
      <Container>
        <Logo>
          <img src="/logo.jpg" alt="Logo" />
        </Logo>
        <Subtitle>VARÃO & BORDONAL ADVOGADOS ASSOCIADOS</Subtitle>
        <Registration>OAB/MA 16.274 / OAB/MA 13.205</Registration>
        <Names>Adv. Maria Varão / Adv. Cleyton Bordonal</Names>
      </Container>
      <Container>
        <Logo>
          <img src="/logo2.jpg" alt="Logo" />
        </Logo>
        <Subtitle>VARÃO & BORDONAL ADVOGADOS ASSOCIADOS</Subtitle>
        <Registration>OAB/MA 16.274 / OAB/MA 13.205</Registration>
        <Names>Adv. Maria Varão / Adv. Cleyton Bordonal</Names>
      </Container>
      <Container>
        <Logo>
          <img src="/logo3.jpg" alt="Logo" />
        </Logo>
        <Subtitle>VARÃO & BORDONAL ADVOGADOS ASSOCIADOS</Subtitle>
        <Registration>OAB/MA 16.274 / OAB/MA 13.205</Registration>
        <Names>Adv. Maria Varão / Adv. Cleyton Bordonal</Names>
      </Container>
      <Container>
        <Logo>
          <img src="/logo4.jpg" alt="Logo" />
        </Logo>
        <Subtitle>VARÃO & BORDONAL ADVOGADOS ASSOCIADOS</Subtitle>
        <Registration>OAB/MA 16.274 / OAB/MA 13.205</Registration>
        <Names>Adv. Maria Varão / Adv. Cleyton Bordonal</Names>
      </Container>
      <Container>
        <Logo>
          <img src="/logo5.jpg" alt="Logo" />
        </Logo>
        <Subtitle>VARÃO & BORDONAL ADVOGADOS ASSOCIADOS</Subtitle>
        <Registration>OAB/MA 16.274 / OAB/MA 13.205</Registration>
        <Names>Adv. Maria Varão / Adv. Cleyton Bordonal</Names>
      </Container>
      <Container>
        <Logo>
          <img src="/logo6.jpg" alt="Logo" />
        </Logo>
        <Subtitle>VARÃO & BORDONAL ADVOGADOS ASSOCIADOS</Subtitle>
        <Registration>OAB/MA 16.274 / OAB/MA 13.205</Registration>
        <Names>Adv. Maria Varão / Adv. Cleyton Bordonal</Names>
      </Container>
      <Container>
        <Logo>
          <img src="/logo7.jpg" alt="Logo" />
        </Logo>
        <Subtitle>VARÃO & BORDONAL ADVOGADOS ASSOCIADOS</Subtitle>
        <Registration>OAB/MA 16.274 / OAB/MA 13.205</Registration>
        <Names>Adv. Maria Varão / Adv. Cleyton Bordonal</Names>
      </Container>
      <Container>
        <Logo>
          <img src="/logo8.jpg" alt="Logo" />
        </Logo>
        <Subtitle>VARÃO & BORDONAL ADVOGADOS ASSOCIADOS</Subtitle>
        <Registration>OAB/MA 16.274 / OAB/MA 13.205</Registration>
        <Names>Adv. Maria Varão / Adv. Cleyton Bordonal</Names>
      </Container>
    </div>
  );
}

export default App;