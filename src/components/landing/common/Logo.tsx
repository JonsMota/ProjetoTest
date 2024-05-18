import styled from 'styled-components';

interface AreaProps {
    className?: string
    id?: string
}

const Bit = styled.span`
    font-weight: 900;
    color: white;
`;

const Cent = styled.span`
    color: rgb(161 161 170 ); 
    font-weight: 100;

`;

const StyledLogo = styled.div`
    font-size: 1.875rem; 
    line-height: 2.25rem
`;

export default function Logo() {
    return (
        <StyledLogo>
            <Bit>Bit</Bit>
            <Cent>CENT</Cent>
        </StyledLogo>
    )
}