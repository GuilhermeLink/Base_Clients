import styled from "styled-components";



export const StyledAnnouncementComents = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
width: 100%;
height: 100%;
  .comment-header{
    display: flex;
    align-items: center;
    gap: .5rem;
  }
  .divisor{
    width: .3rem;
    height: .3rem;
    border-radius: 50%;
    background-color: #ADB5BD;
  }
  .profile-initials {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    min-height: 2rem;
    background-color: #4529e6;
    border-radius: 50%;
    font-weight: 500;
    color: #fff;
    font-size: 1rem;
  }
  .created-at{
    font-size: .6rem;
    font-weight: 300;
    color: #495057;
  }
  .coment{
    display: flex;
    flex-direction: column;
    gap:1rem;
  }
  .coment-conent{
    font-size: .8rem;
    font-weight: 300;
    color: #495057;
    line-height: 150%;
  }
`;