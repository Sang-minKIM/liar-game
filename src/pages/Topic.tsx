import React from "react";
import { Container, ContentsBox, DogImg, Message, Submit } from "../components/Contents";
import dog from "../assets/Dog.png";
import food from "../assets/Food.png";
import animal from "../assets/Animal.png";
import landmark from "../assets/Landmark.png";

import styled from "styled-components";

const Contents = styled(ContentsBox)`
    height: 78%;
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

const Category = styled.li`
    height: 32%;
    width: 70%;
    border: 1px solid ${(props) => props.theme.blue};
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CategoryImg = styled.img`
    width: 5rem;
    height: 5rem;
    margin-left: 0.6rem;
`;

const CategoryName = styled.h2`
    width: 60%;
    text-align: center;
    font-size: ${(props) => props.theme.fontSize.large};
`;

function Topic() {
    return (
        <Container>
            <Contents>
                <DogImg src={dog} />
                <Message>주제를 골라줘</Message>
                <Topics>
                    <Category>
                        <CategoryImg src={animal} />
                        <CategoryName>동물</CategoryName>
                    </Category>
                    <Category>
                        <CategoryImg src={food} />
                        <CategoryName>음식</CategoryName>
                    </Category>
                    <Category>
                        <CategoryImg src={landmark} />
                        <CategoryName>랜드마크</CategoryName>
                    </Category>
                </Topics>
                <Submit>확인</Submit>
            </Contents>
        </Container>
    );
}

export default Topic;
