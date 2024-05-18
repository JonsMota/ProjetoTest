import styled from "styled-components"

import Link from "next/link"

interface MenuItemProps {
    children: any
    url?: string
    onClick?: () => void
    className?: string
}

const StyledMenuItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-align: center;
    color: #d1d5db; 
    margin: 0.5rem;
    padding: 1rem;
    border-radius: 0.375rem;
    height: 2.25rem; 
`

export default function MenuItem(props: MenuItemProps) {
    function renderButton() {
        return (
            <StyledMenuItem className={props.className} onClick={props.onClick}>
                {props.children}
            </StyledMenuItem>
        )
    }

    return props.url ? (
        <Link href={props.url ?? ''}>{renderButton()}</Link>
    ) : renderButton()
}