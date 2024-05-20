import styled from 'styled-components';

interface AreaProps {
    className?: string
    id?: string
}

const StyledLogo = styled.div`
    font-size: 1.875rem; 
    line-height: 2.25rem
`
const Logos = styled.div`
  img {
    width: 200px;
    height: 130px;
    border-radius: 8px;
  }
`

export default function Logo() {
    return (
        <StyledLogo>
            <Logos>
              <img src="/logo.jpg" alt="Logo" />
            </Logos>
        </StyledLogo>
    )
}