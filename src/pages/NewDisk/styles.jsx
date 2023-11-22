import styled from "styled-components";

export const FormDisk = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 25px;

    & *{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }

    & .diskBtn{
        width: 1000px !important;
        margin-left: 15px;
        font-weight: bolder;
        font-size: larger;
    }
`