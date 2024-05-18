import styled from "styled-components"

interface PageProps {
    extern?: boolean
    children: any
    className?: string
}

const StyledPage = styled.div<PageProps>`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-image: linear-gradient(to right,#191a1be0, #000000, #191a1be0);
    ${props => props.className && `class: ${props.className};`}
`;

export default function Page(props: PageProps) {
    return (
        <StyledPage>
            {props.children}
        </StyledPage>
    )
}