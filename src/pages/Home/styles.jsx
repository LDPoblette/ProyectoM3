import styled from "styled-components";

export const HomeLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    color: aliceblue;
    font-size: large;
    font-weight: bolder;

    & h1{
        margin-top: 25px;
        font-family: cursive;
        text-shadow: 2px 2px 2px black;
    }
`