import styled from "styled-components";



export const StyledCardAnnounce = styled.div`
 @media (min-width: 1024px){
      flex-basis: 20%;
    }
  .card-announce {
    .car-image-container {
      background-color: #e9ecef;
    }
    .owner-accounce {
      margin-top: 1rem;
      display: flex;
      gap: 1rem;
      align-items: center;
    }
  }
  .car-info-detail {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1rem;
    .left-side {
      span {
        padding: 0.5rem;
        border-radius: 4px;
        color: #4529e6;
        background-color: #edeafd;
      }
      display: flex;
      gap: 1rem;
    }
  }
`