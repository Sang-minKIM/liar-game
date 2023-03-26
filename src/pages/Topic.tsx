import React from "react";
import { Container, ContentsBox, DogImg, Message, Submit } from "../components/Contents";
import dog from "../assets/Dog.png";
import food from "../assets/Food.png";
import animal from "../assets/Animal.png";
import landmark from "../assets/Landmark.png";
import styled, { css } from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { answerAtom, fakeAnswerAtom, peopleCountAtom, topicAtom } from "../atom";
import { useNavigate } from "react-router-dom";
import { animalList, foodList, landmarkList } from "../data/topics";

const Contents = styled(ContentsBox)`
    height: 80%;
    padding: 10% 0px;
    justify-content: space-between;
`;

const Topics = styled.ul`
    height: 55%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const Category = styled.div<{ name: string; selected: string }>`
    height: 32%;
    width: 70%;
    border: 1px solid ${(props) => props.theme.lightBlue};
    ${(props) =>
        props.selected === props.name &&
        css`
            border: 2px solid ${(props) => props.theme.blue};
        `}

    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CategoryImg = styled.img`
    width: 4rem;
    height: 4rem;
    margin-left: 0.6rem;
`;

const CategoryName = styled.h2`
    width: 60%;
    text-align: center;
    font-size: ${(props) => props.theme.fontSize.large};
`;

function Topic() {
    const [topic, setTopic] = useRecoilState(topicAtom);
    const [answer, setAnswer] = useRecoilState(answerAtom);
    const [fake, setFake] = useRecoilState(fakeAnswerAtom);
    const navigate = useNavigate();
    const onClick = (event: any) => {
        const name = event.currentTarget.getAttribute("name");
        setTopic(name);
    };

    const setLiar = () => {
        let words = [...animalList];
        if (topic === "food") {
            words = [...foodList];
        } else if (topic === "landmark") {
            words = [...landmarkList];
        }
        setAnswer(words[Math.floor(Math.random() * words.length)]);
        words.splice(words.indexOf(answer), 1);
        setFake(words[Math.floor(Math.random() * words.length)]);
        if (topic !== "") {
            navigate("/role");
        }

        return;
    };

    const onSubmit = () => {
        setLiar();
    };

    return (
        <Container>
            <Contents>
                <DogImg src={dog} />
                <Message>주제를 골라줘</Message>
                <Topics>
                    <Category name="animal" selected={topic} onClick={onClick}>
                        <CategoryImg src={animal} />
                        <CategoryName>동물</CategoryName>
                    </Category>
                    <Category name="food" selected={topic} onClick={onClick}>
                        <CategoryImg src={food} />
                        <CategoryName>음식</CategoryName>
                    </Category>
                    <Category name="landmark" selected={topic} onClick={onClick}>
                        <CategoryImg src={landmark} />
                        <CategoryName>랜드마크</CategoryName>
                    </Category>
                </Topics>
                <Submit onClick={onSubmit}>확인</Submit>
            </Contents>
        </Container>
    );
}

export default Topic;
