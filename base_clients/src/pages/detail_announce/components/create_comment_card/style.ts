import styled from "styled-components";




export const StyledCreateComentCard = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
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
  .create-coment-header{
    display: flex;
    align-items: center;
    gap: .5rem;
  }
  textarea{
    border: 1px solid #E9ECEF;
    padding: 1rem;
    &:focus{
        outline: none;
    }
  }
  button{
    width: 50%;
    background-color: #4529E6;
    border: none;
    font-weight: 700;
    padding: 1rem;
    border-radius: 4px;
    color: #fff;
  }
  .shortcuts{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 1rem;
    p{
        padding: .5rem;
        font-size: .8rem;
        border-radius: 24px;
        color: #868E96;
        background-color: #E9ECEF
;
    }
  }
`