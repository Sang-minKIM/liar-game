import React from "react";
import { Container, ContentsBox, DogImg, Message, Submit } from "../components/Contents";
import dog from "../assets/Dog.png";
import styled from "styled-components";

const FinishContents = styled(ContentsBox)`
    height: 60%;
`;

const Answer = styled.h1`
    font-size: ${(props) => props.theme.fontSize.xLarge};
    width: 100%;
    height: 20%;
    text-align: center;
    margin: 8% 0px;
`;

function Finish() {
    return (
        <Container>
            <FinishContents>
                <DogImg src={dog} />
                <Message>제시어는</Message>
                <Answer>"강아지"</Answer>
                <Submit>다시하기</Submit>
            </FinishContents>
        </Container>
    );
}

export default Finish;
