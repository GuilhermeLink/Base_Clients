import styled from "styled-components";

export const StyledNavbar = styled.header`
  position: fixed;
  z-index: 20;
  background-color: #4B595D;
  padding: 0 1rem;
  width: 100%;
  height: 5rem;
  nav {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #4B595D;
  }

  .base-clients-logo{
    font-size: 1.5rem;
    color: #fff;
    cursor: pointer;
  }

  .menu-burger {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    width: 2rem;
    height: 2rem;
    img{
      width: 100%;
      height: 100%;
      object-fit: scale-down;
    }
    @media (min-width: 1024px) {
      display: none;
    }
  }

  .profile-info {
    display: none;
    height: 100%;
    background-color: #4b595d;
    align-items: center;
    padding: 0 1rem;
    gap: 1rem;
    p {
      color: #495057;
    }
    @media (min-width: 1024px) {
      display: flex;
    }
  }

  .profile-initials {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    background-color: #4529e6;
    border-radius: 50%;
    font-weight: 500;
    color: #fff;
    font-size: 1rem;
  }

  .btn{
    background-color: transparent;
    font-weight: bold;
  }

  .btn-login {
    color: #fff;
    padding: .5rem 1rem;
    border-radius: 4px;
    background-color: #2A417A;
    border: 1px solid #2A417A;
    cursor: pointer;
  }

  .btn-login:hover {
    background-color: #4529e6;
    border: 1px solid #4529e6;
  }

  .btn-register {
    color: #fff;
    border-radius: 4px;
    padding: .5rem 1rem;
    background-color: #2A417A;
    border: 1px solid #2A417A;
    cursor: pointer;
  }

  .btn-register:hover {
    background-color: #4529e6;
    border: 1px solid #4529e6;
  }

  ul{
    width: 100%;
    left: 0;
    position: absolute;
    z-index: -50;
    background-color: #4B595D;
    height: min-content;
    transition: .5s;
    @media (min-width: 1024px){
      display: none;
    }
  }

  .show{
    transform: translateY(0%);
    background-color: #728387;
  }

  .hidden{
    transform: translateY(-150%);

  }

  .mobile-login{
    display: flex;
    padding: 1rem;
    color: #DEE2E6;
    cursor: pointer;
    width: 100%;
    padding: 1rem;
    border: 1px solid #DEE2E6;
    border-radius: 4px;
    background-color: transparent;
    justify-content: center;
  }

  li{
    display: flex;
    padding: 1rem;
    color: #495057;
    width: 100%;
    text-align: center;
    list-style: none;
    cursor: pointer;
    &:last-child{
      justify-content: center;
      button{
        cursor: pointer;
        width: 100%;
        padding: 1rem;
        color: #DEE2E6;
        border: 1px solid #DEE2E6;
        border-radius: 4px;
        background-color: transparent;
      }
    }
  }

`;
