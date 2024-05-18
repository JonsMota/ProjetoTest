import styled from 'styled-components';

interface AreaProps {
    children: any
    className?: string
    id?: string
}

const StyledArea = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    ${props => props.className}
`;

const Content = styled.div`
    padding-left: 1.75rem;
    padding-right: 1.75rem;
    width: 100%;
    
    @media (min-width: 1200px) {
        padding-left: 0;
        padding-right: 0;
        width: 1200px;
    }
`;

export default function Area(props: AreaProps) {
    return (
        <StyledArea id={props.id ?? ''} className={props.className ?? ''}>
            <Content>
                {props.children}
            </Content>
        </StyledArea>
    )
}