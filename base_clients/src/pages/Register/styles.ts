import styled from 'styled-components';

export const RegisterPage = styled.div`
    width: 370px;
    height: 1001px;
    background-color: var(--color-Grey-3);
    margin: 0 auto;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    form {
        width: 90%;
        margin: 0 auto;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    form > h2, p {
        text-align: center;
    }

    form > h2 {
        font-weight: 700;
        font-size: 18px;
        text-align: center;
        padding-top: 42px;
        color: var(--color-Grey-0);
    }

    form > label {
        margin-bottom: 15px;
        margin-top: 22px;
    }

    p {
        text-align: center;
        font-weight: 400;
        font-size: 12px;
        margin: 22px 0 0 0;
        color: var(--color-Grey-1);
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

    span {
        height: 15px;
        font-size: 12px;
        color: var(--color-negative);
    }

    form > select {
        display: flex;
        justify-content: space-between;
        background-color: var(--color-Grey-2);
        border: 1px solid transparent;
        border-radius: 4px;
        padding: 16px 10px;
        color: var(--color-Grey-1);
    }

    form > label {
        font-weight: 400;
        font-size: 12px;
        color: var(--color-Grey-0);
    }

    select {
        cursor: pointer;
    }

    select:hover {
        border: 1px solid var(--color-Grey-0);
    }


    button {
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

    button:hover {
        background-color: var(--color-primary-Focus);
        border: 1px solid var(--color-primary-Focus);
    }

`

export const RegisterHeader = styled.header`
    margin-top: 80px;
    margin-bottom: 35px;
    text-align: center;

    header {
        width: 370px;
        margin: 0 auto;
        text-align: center;
        display: flex;
        justify-content: space-between;
    }

    @media (max-width: 390px) {
        header {
            margin: 0 auto;
            width: 350px;
        }
    }

    header > a {
        display: flex;
        align-items: center;
        text-decoration: none;
        font-weight: 600;
        font-size: 12px;
        padding: 0 16px;
        border-radius: 4px;
        background-color: var(--color-Grey-3);
        color: var(--color-Grey-0);
        cursor: pointer;
    }

    header > a:hover {
        background-color: var(--color-Grey-1);
    }
`