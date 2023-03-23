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

const SmallContainer = styled.div`
    @media (min-width: ${(props) => props.theme.deviceSizes.mobile}) {
        display: none;
    }
    width: 100vw;
    height: 100vh;
`;

const Layout = () => {
    return (
        <>
            <LargeContainer>화면을 줄여주세요</LargeContainer>
            <SmallContainer>hello</SmallContainer>
        </>
    );
};

export default Layout;
