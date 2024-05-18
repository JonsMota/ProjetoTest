import styled from 'styled-components';
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react"
import SocialMedia from "./SocialMedia"

const SocialMediaContainer = styled.div`
    display: flex;
`;

export default function SocialMedias() {
    return (
        <SocialMediaContainer>
            <SocialMedia icon={<IconBrandYoutube />} url="/index2" />
            <SocialMedia icon={<IconBrandInstagram />} url="/index3" />
            <SocialMedia icon={<IconBrandGithub />} url="https://github.com" />
            <SocialMedia icon={<IconBrandLinkedin />} url="https://www.linkedin.com" />
        </SocialMediaContainer>
    )
}
