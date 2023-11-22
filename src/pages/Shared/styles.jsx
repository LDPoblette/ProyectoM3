import styled from "styled-components"

export const ModalStyle = styled.div`
    position: fixed;
    left: 35%;
    top: 100px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    
    width: 30%;
    height: 320px;
    padding: 20px;
    
    background-color: var(--baseColor);
    border: none;
    border-radius: 15px;
    box-shadow: 0px 0px 5px 1px black;

    
    font-weight: bolder;
    color: #f0f8ffcb;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

    & .btn-modal-container{
        width: 100%;
        margin-top: 50px;
        text-align: right;
    }

    & p{
        margin-top: 50px;
        margin-left: 15px;
        font-size: 17px;
        text-shadow: 1px 1px 2px black;
    }

    & .h1-modal-container{
        width: 100%;
        height: 65px;

        display: flex;
        align-items: center;

        border-radius: 12px;
        background-color: var(--otherColor);
        box-shadow: 0px 0px 5px 1px black;

        & h1{
            margin-left: 15px;
            font-size: 28px;
        }
    }
`

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
            border: solid 1px var(--errorBorder);
        }
    }

    &.buttons{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: end;
    }
`