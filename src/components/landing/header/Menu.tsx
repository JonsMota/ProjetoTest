import styled from 'styled-components'

import { IconBrandGoogle } from '@tabler/icons-react'
import MenuItem from './MenuItem'

const MenuContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`

const StyledMenuItem = styled(MenuItem)`
    display: none;       

    @media (min-width: 640px) {
        display: flex;
    }
`

const StyledLogin = styled(MenuItem)`
    background-image: linear-gradient(to right, #4f46e5, #1098ad);
`

const StyledLoginContent = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

export default function Menu() {
    return (
        <MenuContainer>
            <StyledMenuItem url="#start">
                Início
            </StyledMenuItem>
            <StyledMenuItem url="#benefits">
                Vantagens
            </StyledMenuItem>
            <StyledMenuItem url="#testimonials">
                Depoimentos
            </StyledMenuItem>
            <StyledLogin>
                <StyledLoginContent>
                    <IconBrandGoogle size={15} />
                    <span>Login</span>
                </StyledLoginContent>
            </StyledLogin>
        </MenuContainer>
    )
}
