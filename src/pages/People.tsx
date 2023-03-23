import React from "react";
import styled from "styled-components";
import { SmallContainer } from "../components/Layout";

const Container = styled(SmallContainer)`
    align-items: center;
`;

const ContentsBox = styled.div`
    width: 87.4%;
    height: 50%;
    border-radius: 1rem;
    border: 1px solid ${(props) => props.theme.gray};
`;

const DogImg = styled.img``;

const Message = styled.h2`
    font-size: ${(props) => props.theme.fontSize.large};
`;

const CountForm = styled.form``;

const Stepper = styled.div``;

const PlusBtn = styled.input``;

const MinusBtn = styled.input``;

const Count = styled.input``;

const Submit = styled.input``;

function People() {
    return (
        <Container>
            <ContentsBox>
                <DogImg src="" />
                <Message>몇 명이랑 할거야?</Message>
                <CountForm>
                    <Stepper>
                        <PlusBtn />
                        <Count />
                        <MinusBtn />
                        <Submit />
                    </Stepper>
                </CountForm>
            </ContentsBox>
        </Container>
    );
}

export default People;
