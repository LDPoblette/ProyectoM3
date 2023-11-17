import styled from "styled-components";

export const DiskLayout = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
    width: 100%;


    & #inventory{
        width: 100%;
        display: flex;
        justify-content: left;
        background-color: #565d69;

        & .tfragment{
            width: 100%;
            display: flex;

            .tcell{
                width: 950px;
                text-align: center;
            }
        }
    }
`