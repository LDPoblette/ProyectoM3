import styled from "styled-components"

export const Validation = styled.div`
    &.login-input{
        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: center;
        width: 100%;
    }

    &.isInvalid{
        Input{
            background-color: var(--errorColour);
            border: solid 1px red;
        }
    }
`