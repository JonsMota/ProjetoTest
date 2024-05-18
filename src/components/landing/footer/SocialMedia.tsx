import styled from "styled-components"
import React from "react"
import Link from "next/link"

interface SocialMediaProps {
    icon: any
    url: string
}

const IconContainer = styled.div`
    background-color: rgb(39 39 42);
    border-radius: 0.5rem;
    padding: 0.25rem;
    margin-right: 0.75rem;
    cursor: pointer;
`;

export default function SocialMedia(props: SocialMediaProps) {
    return (
        <Link href={props.url} target="_blank">
            <IconContainer>
                {React.cloneElement(props.icon, {
                    size: 35,
                    strokeWidth: 1,
                    className: "text-indigo-400",
                })}
            </IconContainer>
        </Link>
    )
}