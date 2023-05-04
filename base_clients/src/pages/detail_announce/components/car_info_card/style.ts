import styled from "styled-components";
export const StyledCarInfoCard = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700&display=swap');
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .tag {
    padding: 0.5rem;
    color: #4529e6;
    background-color: #edeafd;
    border-radius: 4px;
  }
  .car-detail-info {
    width: min-content;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    /* background-color: green; */
  }
  .car-detail-info--year-and-km {
    width: 100%;
    display: flex;
    gap: 1rem;
    span{
        white-space: nowrap;
    }
  }
  .car-price{
    font-family: 'Lexend', sans-serif;
    font-weight: 700;
    font-size: 16px;
  }
  .btn-buy{
    background-color: #4529E6;
    border: none;
    font-weight: 700;
    padding: 1rem;
    border-radius: 4px;
    color: #fff;
  }
`;
