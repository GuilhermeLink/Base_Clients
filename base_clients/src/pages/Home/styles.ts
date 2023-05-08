import styled from 'styled-components';

export const HomePage = styled.header`
    width: 60%;
    height: 72px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 426px) {
        width: 80%;
    }

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        font-weight: 600;
        font-size: 12px;
        padding: 10px 16px;
        border-radius: 4px;
        background-color: var(--color-Grey-3);
        color: var(--color-Grey-0);
        cursor: pointer;
    }

    a:hover {
        background-color: var(--color-Grey-1);
    }

    span {
        color: var(--color-primary);
    }
`

export const Main = styled.main`
    width: 100vw;
    margin: 0 auto;

    section > div > h2 {
        font-weight: 700;
        font-size: 18px;
        color: var(--color-Grey-0);
    }

    div > p {
        font-weight: 400;
        font-size: 16px;
        color: var(--color-white);
    }

    div > span {
        font-weight: 400;
        font-size: 12px;
        color: var(--color-Grey-1);
    }

    section {
        border-top: 1px solid var(--color-Grey-3);
        border-bottom: 1px solid var(--color-Grey-3);
    }

    .home {
        margin-top: 37px;
        height: 600px;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
    }

    .home > div > h3 {
        color: var(--color-Grey-0);
    }

    .home > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 21px;
        height: 32px;
        width: 100%;
    }

    .home > div > button {
        width: 32px;
        height: 32px;
        color: var(--color-Grey-0);
        font-size: 20px;
        font-weight: 700;
        background-color: var(--color-Grey-3);
        border-radius: 4px;
        cursor: pointer;
    }

    .home > div > button:hover {
        background-color: var(--color-Grey-1);
    }

    div:only-child {
        
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    div {
        width: 60%;
        height: 100px;
        display: flex;
        flex-direction: row;
        margin: 0 auto; 
        overflow: hidden;
    }

    @media (max-width: 426px) {
        div {
            width: 80%;

        }
    }

    ul {
        width: 100%;
        height: 400px;
        overflow-y: scroll;
    }

    ul > .techBox {
        margin: 0 auto;
        width: 90%;
        height: 80px;
        align-items: center;
        background-color: var(--color-Grey-3);
    }

    ul > div > li {
        width: 90%;
        height: 50px;
        margin: 0 auto;
        padding: 0 22px;
        background-color: var(--color-Grey-4);
    }

    ul > div > li > div {
        width: 100%;
        height: 50px;
        justify-content: space-between;
    }

    li > div > h2 {
        font-weight: 700;
        font-size: 14px;
        color: var(--color-white);   
    }

    @media(max-width: 680px) {
        li > div > h2 {
            overflow: hidden;
            max-width: 80px;
            word-break: break-all;
        }
    }

    li > div > .techStatus {
        margin: 0;
        height: 50px;
        align-items: center;
        justify-content: flex-end;
    }

    .techStatus > p {
        font-weight: 400;
        font-size: 12px;
        color: var(--color-Grey-1);
    }

    .techStatus > button {
        margin-left: 22px;
    }


`

export const Modal = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(18, 18, 20, 0.5);

    .modalCard {
        width: 369px;
        height: 362px;
        position: absolute;
        top: 30%;
        left: 35%;
        background-color: var(--color-Grey-3);
        border-radius: 4px;
    }

    .modalCard > header > button:hover {
        color: #fff;
    }

    .modalCard > form > label > input {
        width: 100%;
        background-color: #fff;
        margin-top: 5px;
        padding: 5px;
    }

    .modalCard > form > label {
        margin-bottom: 10px
    }

    @media(max-width: 426px) {
        .modalCard {
            width: 250px;
            top: 30%;
            left: 12%;
        }
    }

    header {
        width: 100%;
        height: 50px;
        background-color: var(--color-Grey-2);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
    }

    header > h3 {
        color: var(--color-Grey-0);
        font-size: 14px;
        font-weight: 700;
    }

    header > button {
        color: var(--color-Grey-1);
        font-size: 16px;
        font-weight: 600;
    }

    form {
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }

    form > label {
        color: var(--color-Grey-0);
        font-size: 12px;
        font-weight: 400;
        margin-top: 22px;
        margin-bottom: 17px;
    }

    form > input {
        display: flex;
        justify-content: space-between;
        background-color: var(--color-Grey-2);
        border: 1px solid transparent;
        border-radius: 4px;
        padding: 16px 10px;
        color: var(--color-Grey-0);
        cursor: pointer;
    }

    form > input:hover {
        border: 1px solid var(--color-Grey-0);
    }

    form > select {
        display: flex;
        justify-content: space-between;
        background-color: var(--color-Grey-2);
        border: 1px solid transparent;
        border-radius: 4px;
        padding: 16px 10px;
        color: var(--color-Grey-0);
        cursor: pointer;
    }

    form > select:hover {
        border: 1px solid var(--color-Grey-0);
    }

    form > span {
        height: 15px;
        font-size: 12px;
        color: var(--color-negative);
    }

    form > button {
        width: 100%;
        padding: 14px 0px;
        margin-top: 20px;
        border-radius: 4px;
        border: solid;
        color: var(--color-Grey-0);
        background-color: var(--color-primary-Negative);
        border: 1px solid var(--color-primary-Negative);
        cursor: pointer;
    }

    form > button:hover {
        background-color: var(--color-primary-Focus);
        border: 1px solid var(--color-primary-Focus);
    }
`