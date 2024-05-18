import Image from "next/image"
import styled from "styled-components"

interface ResponsiveImageProps {
    image: any
    className?: string
}

const StyledImage = styled(Image)`
    width: 100%;
    height: 120px;

    @media (min-width: 640px) {
        width: 200px;
        height: 330px;
    }
    @media (min-width: 768px) {
        width: 350px;
        height: 365px;
    }
    @media (min-width: 1024px) {
        width: 550px;
        height: 365px;
    }

    border-radius: 0.75rem;
    object-fit: cover;
`;

export default function ResponsiveImage(props: ResponsiveImageProps) {
    return (
        <StyledImage
            src={props.image}
            alt="Image"
            className={props.className ?? ''}
        />
    )
}
