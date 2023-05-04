import styled from "styled-components";

export const StyledProfileViewUserPage = styled.div`
  width: 100%;
  .bg-brand-color {
    /* position: relative; */
    display: flex;
    justify-content: center;
    background-color: #4529e6;
    height: 15rem;
  }
  .card {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding:2rem;
    width: 80%;
    min-height: 23rem;
    background-color: #fdfdfd;
    color: #212529;
    font-weight: 600;
    @media (min-width: 1024px){
      min-height: 20rem;
    }
  }
  .account-type {
    border-radius: 4px;
    padding: 0.5rem;
    color: #4529e6;
    background-color: #edeafd;
    font-weight: 500;
  }
  .profile-description {
    color: #495057;
    text-align: justify;
    font-weight: 400;
  }
  .announcements {
    padding: 1rem;
    margin-top: 15rem;
    @media (min-width: 1024px){
      margin-top: 10rem;
    }
  }
  .car-announcements-carrousel {
    display: flex;
    width: 100%;
    margin-top: 1rem;
    gap: 1rem;
    overflow-x: auto;
    @media (min-width: 1024px){
      justify-content: center;
      overflow-x: hidden;
      flex-wrap: wrap;
    }
  }
  .pagination{
    text-align: center;
    margin-bottom: 10rem;
  }
  .forwad{
    color: #4529e6;
    margin-top: 1rem;
    font-size: 1.5rem;
  }
  .btn-create-announce{
    cursor: pointer;
    width: 10rem;
    padding: 1rem;
    border-radius: 4px;
    color: #4529e6;
    border: 1px solid #4529e6;
    background-color: transparent;
  }
`;
