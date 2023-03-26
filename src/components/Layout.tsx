import styled from "styled-components";

const LargeContainer = styled.div`
    @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
        display: none;
    }
    background-color: ${(props) => props.theme.blue};
    font-size: ${(props) => props.theme.fontSize.xLarge};
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
    @supports (-webkit-touch-callout: none) {
        height: -webkit-fill-available;
    }
    display: flex;
    justify-content: center;
    padding-top: 10%;
`;

const Title = styled.h1`
    width: 100%;
    font-size: ${(props) => props.theme.fontSize.xLarge};
    height: ${(props) => props.theme.fontSize.xLarge};
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
