import styled from "styled-components";

const LargeContainer = styled.div`
    @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
        display: none;
    }
    background-color: ${(props) => props.theme.blue};
    font-size: 3.125rem;
    width: 100vw;
    height: 100vh;
    color: ${(props) => props.theme.white};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SmallContainer = styled.div`
    @media (min-width: ${(props) => props.theme.deviceSizes.mobile}) {
        display: none;
    }
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    padding-top: 10%;
`;

const Title = styled.h1`
    width: 100%;
    height: 3.125rem;
    font-size: 3.125rem;
    color: ${(props) => props.theme.black};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Layout = () => {
    return (
        <>
            <LargeContainer>화면을 줄여주세요</LargeContainer>
            <SmallContainer>
                <Title>😵‍💫 Liar Game 😵‍💫</Title>
            </SmallContainer>
        </>
    );
};

export default Layout;
