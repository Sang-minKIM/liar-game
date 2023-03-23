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

function Contents() {
    return (
        <Container>
            <ContentsBox>
                <DogImg src="" />
                <Message>몇 명이랑 할거야?</Message>
            </ContentsBox>
        </Container>
    );
}

export default Contents;
