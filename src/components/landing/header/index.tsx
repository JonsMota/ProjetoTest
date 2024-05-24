import styled from "styled-components"

import Area from "../common/Area"
import Logo from "../common/Logo"
import Menu from "./Menu"

const HeaderContainer = styled(Area)`
    background-color: black;
    position: fixed;
    z-index: 50;
`
const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 6rem;
`

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <Logo />
                <Menu />
            </HeaderContent>
        </HeaderContainer>
    )
}