import React from "react";
import { Container, ContentsBox, DogImg, Message } from "../components/Contents";
import dog from "../assets/Dog.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const GameContents = styled(ContentsBox)`
    height: 400px;
    padding: 1rem;
`;

const Answer = styled.input`
    width: 88%;
    height: 40%;
    margin: 1rem 0;
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

const AnswerForm = styled.form`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Submit = styled.input`
    width: 12rem;
    height: 3rem;
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

function Game() {
    const navigate = useNavigate();

    return (
        <Container>
            <GameContents>
                <DogImg src={dog} />
                <Message>라이어로</Message>
                <Message>지목된 사람은</Message>
                <Message>제시어를 적어줘</Message>
                <AnswerForm onSubmit={() => navigate("/finish")}>
                    <Answer required placeholder="제시어는..."></Answer>
                    <Submit type="submit" name="answer" value="확인" />
                </AnswerForm>
            </GameContents>
        </Container>
    );
}

export default Game;
