import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { answerAtom, fakeAnswerAtom, peopleCountAtom } from "../atom";
import { Container } from "../components/Contents";

const RoleContainer = styled(Container)`
    display: flex;
    flex-direction: column;
`;

const Cards = styled.div`
    width: 100vw;
    height: 39vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15%;
`;

const Card = styled(motion.div)`
    width: 70vw;
    height: 39vh;
    background-color: ${(props) => props.theme.blue};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 24px;
`;

const CardText = styled.span`
    font-size: ${(props) => props.theme.fontSize.large};
    color: ${(props) => props.theme.white};
`;

const Answer = styled.span`
    font-size: ${(props) => props.theme.fontSize.xLarge};
    color: ${(props) => props.theme.white};
`;

const ControlBar = styled.div`
    height: fit-content;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 7%;
    position: absolute;
    bottom: 15%;
`;

const Dots = styled.div``;

const Dot = styled.span``;

const NextBtn = styled.button`
    position: relative;

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

const NextBtnContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    font-size: ${(props) => props.theme.fontSize.large};
    color: ${(props) => props.theme.white};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const cardVariants = {
    invisible: {
        scale: 0.9,
        x: 400,
    },
    visible: { scale: 1, x: 0, transition: { duration: 0.5 } },
    exit: { scale: 0.9, x: -400, transition: { duration: 0.5 } },
};

function Role() {
    const answer = useRecoilValue(answerAtom);
    const fake = useRecoilValue(fakeAnswerAtom);
    const [visible, setVisible] = useState(0);
    const [check, setCheck] = useState(false);
    const [liar, setLiar] = useState(0);
    const players = useRecoilValue(peopleCountAtom);
    const cards = Array.from({ length: players }, (_, i) => i);
    const navigate = useNavigate();
    const next = () => {
        setCheck(false);
        setVisible((prev) => (prev === players - 1 ? players - 1 : prev + 1));
        if (visible === players - 1) {
            navigate("/game");
        }
    };
    // const liar = Math.floor(Math.random() * players);
    // check state가 변경되면서 리렌더링이 일어나, liar가 다시 할당되는 버그가 발생했다.
    useEffect(() => setLiar(Math.floor(Math.random() * players)), []);

    return (
        <RoleContainer>
            <AnimatePresence>
                <Cards>
                    {cards.map((value, index) =>
                        index === visible ? (
                            <Card onClick={() => setCheck((prev) => !prev)} variants={cardVariants} initial="invisible" animate="visible" exit="exit" key={index}>
                                {check ? (
                                    <>
                                        {index === liar ? <Answer>{fake}</Answer> : <Answer>{answer}</Answer>}

                                        <CardText>터치해서 가리기</CardText>
                                    </>
                                ) : (
                                    <>
                                        <CardText>눌러서</CardText>
                                        <CardText>제시어</CardText>
                                        <CardText>확인하기</CardText>
                                    </>
                                )}
                            </Card>
                        ) : null
                    )}
                </Cards>
                <ControlBar>
                    <Dots>{visible + 1}</Dots>
                    <NextBtn onClick={next}>
                        <NextBtnContent>&gt;</NextBtnContent>
                    </NextBtn>
                </ControlBar>
            </AnimatePresence>
        </RoleContainer>
    );
}

export default Role;
