import styled from "styled-components";
import { SmallContainer } from "./Layout";

export const Container = styled(SmallContainer)`
    align-items: center;
`;

export const ContentsBox = styled.div`
    width: 87.4%;
    height: 50%;
    border-radius: 1rem;
    border: 1px solid ${(props) => props.theme.gray};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0px 6px 11px 3px rgba(229, 229, 234, 1);
`;

export const DogImg = styled.img`
    width: 4.5rem;
    height: 4.5rem;
`;

export const Message = styled.h2`
    font-size: ${(props) => props.theme.fontSize.large};
`;

export const Submit = styled.button`
    width: 40vw;
    height: 5vh;
    border-radius: 0.75rem;
    border: none;
    background-color: ${(props) => props.theme.blue};
    font-size: ${(props) => props.theme.fontSize.large};
    color: ${(props) => props.theme.white};
    box-shadow: 0px 0px 3px 0px ${(props) => props.theme.darkGray};
    &:active {
        opacity: 0.8;
        box-shadow: none;
    }
`;

function Contents() {
    return (
        <Container>
            <ContentsBox>
                <DogImg src="" />
                <Message></Message>
                <Submit></Submit>
            </ContentsBox>
        </Container>
    );
}

export default Contents;
