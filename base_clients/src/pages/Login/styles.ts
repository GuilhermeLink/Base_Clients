import styled from 'styled-components';

export const BackPage = styled.div`
    width: 100%;
    height: 100%;

    .backlogo {
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: -1;
        opacity: 0.5;
    }
`

export const LoginPage = styled.div`
    width: 369px;
    height: 522px;
    background-color: var(--color-Grey-3);
    margin: 0 auto;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    header {
        text-align: center;
    }

    form {
        width: 90%;
        margin: 0 auto;
    }

    @media (max-width: 365px) {
        form {
            width: 80%;
        }
    }

    form > section {
        display: flex;
        flex-direction: column;
    }

    form > h2 {
        font-weight: 700;
        font-size: 18px;
        text-align: center;
        padding-top: 42px;
        color: var(--color-Grey-0);
    }

    form > section > input {
        display: flex;
        justify-content: space-between;
        background-color: var(--color-Grey-2);
        border: 1px solid transparent;
        border-radius: 4px;
        padding: 16px 10px;
        color: var(--color-Grey-0);
    }

    form > section > #email:hover {
        border: 1px solid var(--color-Grey-0);
    }

    form > section > div:hover {
        border: 1px solid var(--color-Grey-0);
    }

    form > section > div {
        display: flex;
        justify-content: space-between;
        background-color: var(--color-Grey-2);
        border: 1px solid transparent;
        border-radius: 4px;
        padding: 0 10px;
    }

    form > section > div > #password {
        width: 100%;
        height: 50px;
        
        color: var(--color-Grey-0);
    }

    form > section > div > svg {
        height: 50px;
        display: flex;
        align-items: center;
        color: var(--color-Grey-1);
    }

    form > section > div > svg > path {
        cursor: pointer;
    }

    form > section > div > svg:hover {
        color: var(--color-white)
    }

    form > section > label {
        font-weight: 400;
        font-size: 12px;
        margin-bottom: 22px;
        margin-top: 26px;
        color: var(--color-Grey-0);
    }

    span {
        height: 15px;
        font-size: 12px;
        color: var(--color-negative);
    }

    p {
        text-align: center;
        font-weight: 600;
        font-size: 12px;
        margin: 34px 0 22px 0;
        color: var(--color-Grey-1);
    }

    button {
        width: 100%;
        margin-top: 22px;
        padding: 14px 0px;
        border-radius: 4px;
        border: 1px solid var(--color-primary);
        font-weight: 500;
        font-size: 16px;
        color: var(--color-Grey-0);
        background-color: var(--color-primary);
    }

    button:hover {
        background-color: var(--color-primary-Focus);
        border: 1px solid var(--color-primary-Focus);
    }

    a {
        text-align: center;
        font-weight: 500;
        font-size: 16px;
        text-decoration: none;
        width: 100%;
        padding: 14px 0px;
        border-radius: 4px;
        color: var(--color-Grey-0);
    }

    a:last-child {
        border: 1px solid var(--color-Grey-1);
        background-color: var(--color-Grey-1);
    }

    a:last-child:hover {
        border: 1px solid var(--color-Grey-2);
        background-color: var(--color-Grey-2);
    }

`

export const LoginHeader = styled.header`
    width: 100%;
    margin-top: 80px;
    margin-bottom: 35px;
    text-align: center;

    h1 {
        width: 60%;
        margin: 0 auto;
    }

    .logo {
        color: var(--color-primary); 
    }

    @media (max-width: 365px) {
        width: 369px;
    }
`

 
