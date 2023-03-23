import React from "react";
import styled from "styled-components";
import { SmallContainer } from "../components/Layout";
import dog from "../assets/Dog.png";

const Container = styled(SmallContainer)`
    align-items: center;
`;

const ContentsBox = styled.div`
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

const DogImg = styled.img`
    width: 4.5rem;
    height: 4.5rem;
`;

const Message = styled.h2`
    font-size: ${(props) => props.theme.fontSize.large};
`;

const CountForm = styled.form`
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

const PlusBtn = styled.input`
    width: 12vw;
    height: 12vw;
    border-radius: 0.75rem;
    border: none;
    background-color: ${(props) => props.theme.blue};
    font-size: ${(props) => props.theme.fontSize.xLarge};
    color: ${(props) => props.theme.white};
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

const Submit = styled.input`
    width: 40vw;
    height: 6vh;
    border-radius: 0.75rem;
    border: none;
    background-color: ${(props) => props.theme.blue};
    font-size: ${(props) => props.theme.fontSize.large};
    color: ${(props) => props.theme.white};
`;

function People() {
    const count = 0;
    return (
        <Container>
            <ContentsBox>
                <DogImg src={dog} />
                <Message>몇 명이랑 할거야?</Message>
                <CountForm>
                    <Stepper>
                        <PlusBtn type="button" value="+" />
                        <Count type="number" value={count} />
                        <MinusBtn type="button" value="-" />
                    </Stepper>
                    <Submit type="submit" value="확인" />
                </CountForm>
            </ContentsBox>
        </Container>
    );
}

export default People;
