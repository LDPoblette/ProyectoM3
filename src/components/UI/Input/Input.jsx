import styled from "styled-components";

export const Input = styled.input`
    height: 2rem;
    width: 150px;
    border: solid 1px gray;
    border-radius: 10px 0 0 10px;

    background-color: var(${(props)=> props.isPrueba ? "--red" : "--black"});
    color: aliceblue;
    font-size: smaller !important;
`