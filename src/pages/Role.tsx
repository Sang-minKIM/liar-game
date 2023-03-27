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
    width: 300vw;
    height: 39vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15%;
    overflow-x: hidden;
    gap: 90vw;
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
    position: absolute;
`;

// const HiddenCard = styled.div`
//     width: 70vw;
//     height: calc(39vh * 0.9);
//     background-color: ${(props) => props.theme.lightBlue};
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     border-radius: 24px;

//     z-index: 1;
// `;

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

const Dots = styled.div`
    font-size: ${(props) => props.theme.fontSize.large};
    color: ${(props) => props.theme.blue};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.25rem;
    width: 50%;
`;

const Dot = styled.span<{ visible: number; index: number }>`
    width: 0.6rem;
    height: 0.6rem;
    border: 1px solid ${(props) => props.theme.blue};
    border-radius: 50%;
    background-color: ${(props) => (props.visible === props.index ? props.theme.blue : props.theme.white)};
`;

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
        x: window.innerWidth + 20,
        backgroundColor: "rgb(128, 206, 240)",
    },
    visible: { scale: 1, x: 0, transition: { duration: 0.5 }, backgroundColor: "rgb(50, 173, 230)" },
    exit: { scale: 0.9, x: -window.innerWidth - 20, transition: { duration: 0.5 }, backgroundColor: "rgb(128, 206, 240)" },
};

function Role() {
    const answer = useRecoilValue(answerAtom);
    const fake = useRecoilValue(fakeAnswerAtom);
    const [visible, setVisible] = useState(0);
    const [check, setCheck] = useState(false);
    const [liar, setLiar] = useState(0);
    const players = useRecoilValue(peopleCountAtom);
    const dots = Array.from({ length: players }, (_, i) => i);
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
            <Cards>
                <AnimatePresence initial={false}>
                    <Card onClick={() => setCheck((prev) => !prev)} variants={cardVariants} initial="invisible" animate="visible" exit="exit" key={visible}>
                        {check ? (
                            <>
                                {visible === liar ? <Answer>{fake}</Answer> : <Answer>{answer}</Answer>}

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
                </AnimatePresence>
            </Cards>
            <ControlBar>
                <Dots>
                    {dots.map((value) => (
                        <Dot visible={visible} index={value} key={value}></Dot>
                    ))}
                </Dots>
                <NextBtn onClick={next}>
                    <NextBtnContent>&gt;</NextBtnContent>
                </NextBtn>
            </ControlBar>
        </RoleContainer>
    );
}

export default Role;
