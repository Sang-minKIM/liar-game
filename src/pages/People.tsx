import React from "react";
import styled from "styled-components";

import dog from "../assets/Dog.png";
import { Container, ContentsBox, DogImg, Message, Submit } from "../components/Contents";

const CountForm = styled.div`
    width: 100%;
    height: 31%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Stepper = styled.div`
    width: 40vw;
    height: 6vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const PlusBtn = styled.button`
    text-align: center;
    width: 12vw;
    height: 12vw;
    border-radius: 0.75rem;
    border: 1px solid ${(props) => props.theme.blue};
    box-shadow: 0px 0px 4px 0px ${(props) => props.theme.darkGray};
    background-color: ${(props) => props.theme.blue};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${(props) => props.theme.fontSize.xLarge};
    color: ${(props) => props.theme.white};

    &:active {
        opacity: 0.8;
        box-shadow: none;
    }
`;

const MinusBtn = styled(PlusBtn)``;

const Count = styled.input`
    width: 13vw;
    height: 13vw;
    border: none;
    text-align: center;
    font-size: ${(props) => props.theme.fontSize.large};
    color: ${(props) => props.theme.blue};
`;

function People() {
    const count = 3;
    return (
        <Container>
            <ContentsBox>
                <DogImg src={dog} />
                <Message>몇 명이랑 할거야?</Message>
                <CountForm>
                    <Stepper>
                        <PlusBtn>+</PlusBtn>
                        <Count type="number" value={count} />
                        <MinusBtn>-</MinusBtn>
                    </Stepper>
                    <Submit>확인</Submit>
                </CountForm>
            </ContentsBox>
        </Container>
    );
}

export default People;
