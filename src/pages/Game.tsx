import React from "react";
import { Container, ContentsBox, DogImg, Message, Submit } from "../components/Contents";
import dog from "../assets/Dog.png";
import styled from "styled-components";

const GameContents = styled(ContentsBox)`
    height: 45%;
    padding: 1rem;
`;

const Answer = styled.input`
    width: 88%;
    height: 18%;
    margin-top: 2rem;
    border: 1px solid ${(props) => props.theme.lightBlue};
    border-radius: 16px;
    font-size: ${(props) => props.theme.fontSize.large};
    text-align: center;
    ::placeholder {
        color: ${(props) => props.theme.darkGray};
    }
    &:focus {
        border: 2px solid ${(props) => props.theme.blue};
    }
`;

function Game() {
    return (
        <Container>
            <GameContents>
                <DogImg src={dog} />
                <Message>라이어로</Message>
                <Message>지목된 사람은</Message>
                <Message>제시어를 적어줘</Message>
                <Answer placeholder="제시어는..."></Answer>
                {/* <Submit>확인</Submit> */}
            </GameContents>
        </Container>
    );
}

export default Game;
