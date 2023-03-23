import React from "react";
import { Container, ContentsBox, DogImg, Message, Submit } from "../components/Contents";
import dog from "../assets/Dog.png";
import styled from "styled-components";

const Topics = styled.ul``;

const Category = styled.li``;

function Topic() {
    return (
        <Container>
            <ContentsBox>
                <DogImg src={dog} />
                <Message>주제를 골라줘</Message>
                <Submit type="submit" value="확인" />
            </ContentsBox>
        </Container>
    );
}

export default Topic;
