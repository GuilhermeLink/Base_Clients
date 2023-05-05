import styled from "styled-components";

export const StyledLoginContent = styled.div`
width: 90%;
margin: 10px auto;
background-color: white;
padding: 28px 30px;
text-decoration: none;

h1 {
    margin-bottom: 32px;
}

#username,
#password {
    width: 100%;
    height: 45px;
    margin: 0 auto;
}

label {
    margin-top: 32px;
    margin-bottom: 10px;
}

a {
    margin-block: 30px;
    text-decoration: none;
    color: #495057;   
}

p {
    margin-block: 30px;
    text-align: center;
    color: #495057;
    font-size: 14px;
}

button {
    width: 100%;
    height: 40px;
}

input {
    border: 1px solid rgba(0,0,0,0.2);
    padding-inline: 5px;
}

input:hover {
    border: 1px solid #4529E6;
    padding-inline: 5px;
}

label,
input,
a {
    display: block;
    font-weight: 500;
    font-size: 14px;
}

.submit_button {
    margin-top: 20px;
    background-color: #2A417A;
    color: white;
    border: none;
}

.submit_button:hover {
    background-color: #4529E6;
}

.register_button {
    background-color: transparent;
    border: 1px solid rgba(0,0,0,0.2);
}

.register_button:hover {
    border: 1px solid #4529E6;
    color: #4529E6;
}

@media (min-width: 1024px) {
    width: 500px;
    margin-top: 70px;
    margin-bottom: 90px;

    button,
    a {
        cursor: pointer;
    }
}
`