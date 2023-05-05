import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  min-height: 5%;
  background-color: #0b0d0d;
  margin: 0 auto;
  /* margin-top: 1rem; */
  padding: 1rem;
  border-radius: 4px;
  h2 {
    justify-content: center;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: #fff;
    span {
      font-size: 0.8rem;
    }
  }
  p {
    text-align: center;
    font-size: 0.8rem;
    color: #fff;
  }
`;
