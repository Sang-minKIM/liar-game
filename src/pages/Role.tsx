import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
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
    bottom: 10%;
`;

const Dots = styled.div``;

const Dot = styled.span``;

const NextBtn = styled.button`
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
    font-size: ${(props) => props.theme.fontSize.large};
    color: ${(props) => props.theme.white};

    &:active {
        opacity: 0.8;
        box-shadow: none;
    }
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
    const [visible, setVisible] = useState(0);
    const [check, setCheck] = useState(false);
    const next = () => setVisible((prev) => (prev === 9 ? 9 : prev + 1));
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(check);

    return (
        <RoleContainer>
            <AnimatePresence>
                <Cards>
                    {cards.map((value, index) =>
                        index === visible ? (
                            <Card onClick={() => setCheck((prev) => !prev)} variants={cardVariants} initial="invisible" animate="visible" exit="exit" key={index}>
                                {check ? (
                                    <>
                                        <Answer>"강아지"</Answer>
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
                    <NextBtn onClick={next}>&gt;</NextBtn>
                </ControlBar>
            </AnimatePresence>
        </RoleContainer>
    );
}

export default Role;
