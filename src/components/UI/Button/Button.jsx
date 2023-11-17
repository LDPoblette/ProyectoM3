import styled from "styled-components"

export const Btn = styled.button`
    height: 35px;
    width: 6.1rem;
    padding: 4px;
    border: none;
    border-radius: 0 10px 10px 0;

    background-color: black;
    color: aliceblue;
    font-size: smaller !important;

    cursor: pointer;
    transition: 0.3s ease;

    &:hover{
        height: 2.7rem;
        width: 6.5rem;
    }
`