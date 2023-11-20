import styled from "styled-components";

export const LoginLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    padding: 70px;

    width: 250px;
    height: 100px;
    background-color: var(--baseColor);
    border-radius: 20px;
    box-shadow: 0px 0px 5px 1px black;

    & *{
        margin: 5px;
    }

    & label{
        color: aliceblue;
        font-weight: bolder;
    }

    & .buttons{
        margin-top: 30px;
    }
`