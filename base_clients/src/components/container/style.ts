import styled from "styled-components";




export const StyledContainer = styled.div`
position: relative;
z-index: 10;
width: 100%;
height: 100vh;
max-width: 100vw;
max-height: 100vh;
overflow-y: hidden;
background-color: #F1F3F5;
@media (min-width: 1024px){
    display: flex;
    justify-content: center;
}

.content{
    width: 100%;
    height: calc(100% - 5rem);
    margin-top: 5rem;
    overflow-y: auto;
    /* @media (min-width: 1024px){
        width: 80%
    } */
}
`