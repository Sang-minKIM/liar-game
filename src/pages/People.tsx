import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import dog from "../assets/Dog.png";
import { peopleCountAtom } from "../atom";
import { Container, ContentsBox, DogImg, Message, Submit } from "../components/Contents";

const CountForm = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const Stepper = styled.div`
    width: 12rem;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const PlusBtn = styled.button`
    position: relative;
    text-align: center;
    width: 3rem;
    padding-bottom: 3rem;
    border-radius: 0.75rem;
    border: 1px solid ${(props) => props.theme.blue};
    box-shadow: 0px 0px 4px 0px ${(props) => props.theme.darkGray};
    background-color: ${(props) => props.theme.blue};

    &:active {
        opacity: 0.8;
        box-shadow: none;
    }
`;

const MinusBtn = styled(PlusBtn)``;

const BtnContents = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${(props) => props.theme.fontSize.xLarge};
    color: ${(props) => props.theme.white};
`;

const Count = styled.div`
    position: relative;
    width: 3rem;
    padding-bottom: 3rem;
    border: none;
`;

const CountContent = styled(BtnContents)`
    font-size: ${(props) => props.theme.fontSize.large};
    color: ${(props) => props.theme.blue};
`;

function People() {
    const [count, setCount] = useRecoilState(peopleCountAtom);
    const minus = () => setCount((prev) => (prev === 3 ? 3 : prev - 1));
    const plus = () => setCount((prev) => (prev === 10 ? 10 : prev + 1));
    const navigate = useNavigate();
    return (
        <Container>
            <ContentsBox>
                <DogImg src={dog} />
                <Message>몇 명이랑 할거야?</Message>
                <CountForm>
                    <Stepper>
                        <MinusBtn onClick={minus}>
                            <BtnContents>-</BtnContents>
                        </MinusBtn>
                        <Count>
                            <CountContent>{count}</CountContent>
                        </Count>
                        <PlusBtn onClick={plus}>
                            <BtnContents>+</BtnContents>
                        </PlusBtn>
                    </Stepper>
                    <Submit onClick={() => navigate("/topic")}>확인</Submit>
                </CountForm>
            </ContentsBox>
        </Container>
    );
}

export default People;
