import styled from 'styled-components'
import Image from 'next/image'

interface TestimonialProps {
    avatar: string
    name: string
    title: string
    text: string
    highlighted?: boolean
}

const StyledTestimonial = styled.div<{ highlighted?: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    background-color: rgb(39 39 42);
    padding: 1.75rem;
    border-radius: 0.75rem;
    width: 350px;
    height: 300px;

    @media (min-width: 1280px) {
        ${props => props.highlighted && 'height: 350px;'}
    }
`;

const StyledImage = styled(Image)`
    max-width: 80px;
    max-height: 80px;
    object-fit: cover;
    border-top-left-radius: 0.75rem;
    border-bottom-right-radius: 0.75rem;
    border-bottom-left-radius: 0.75rem;
`;

const StyledName = styled.span`
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: #fff;
    font-weight: 900;
`;

const StyledTitle = styled.span`
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: rgb(161 161 170);
    font-weight: 100;
`;

const StyledText = styled.p`
    text-align: center;
    color: rgb(161 161 170);
`;

const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function Testimonial({ avatar, name, title, text, highlighted }: TestimonialProps) {
    return (
        <StyledTestimonial highlighted={highlighted}>
            <StyledImage
                src={avatar}
                alt="Avatar"
                width={80}
                height={80}
            />
            <StyledInfo>
                <StyledName>{name}</StyledName>
                <StyledTitle>{title}</StyledTitle>
            </StyledInfo>
            <StyledText>{text}</StyledText>
        </StyledTestimonial>
    )
}
