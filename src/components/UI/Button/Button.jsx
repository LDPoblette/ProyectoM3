import styled from "styled-components"

export const Btn = styled.button`
    height: 35px;
    width: 80px;
    padding: 4px;
    border: none;
    border-radius: 0 10px 10px 0;

    background-color: black;
    color: aliceblue;
    font-size: smaller !important;

    cursor: pointer;
    transition: 0.3s ease;

    &:hover{
        height: 45px;
        width: 90px;
    }
`