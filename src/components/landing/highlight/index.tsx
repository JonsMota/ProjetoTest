import styled from 'styled-components';
import Area from "../common/Area"
import Slogan from "./Slogan"
import principal from "../../../../public/principal.jpg"
import ResponsiveImage from "../common/ResponsiveImage"

const HighlightContainer = styled.div`
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (min-width: 768px) {
        .responsive-image {
            transform: rotate(3deg);
            display: inline;
        }
    }
`;

export default function Highlight() {
    return (
        <Area id="start">
            <HighlightContainer>
                <Slogan />
                <ResponsiveImage
                    image={principal}
                    className="responsive-image"
                />
            </HighlightContainer>
        </Area>
    )
}
