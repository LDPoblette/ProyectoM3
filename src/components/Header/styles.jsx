import styled from "styled-components"

export const NavLayout = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 25px 35px;
    border-radius: 7px;

    background-color: var(--otherColor);
    width: 95%;
    height: 80px;

    img{
        margin-top: 5px;
        border-radius: 7px;
        height: 90%;
        width: 11rem;
        filter: invert(100%);
    }

    ul{
        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: center;

        height: 95%;
        width: 65%;
    }

    ul *{
        color: white;
        font-size: 1.1rem;
        font-weight: bolder;
        text-decoration: none;
        list-style-type: none;
        margin-left: 15px;

        cursor: pointer;
        transition: 0.3s ease;
    }

    ul li .hola:hover{
        background-color: grey;
        color: var(--otherColor);
    }
`