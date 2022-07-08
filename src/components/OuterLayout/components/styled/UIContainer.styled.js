import styled from "styled-components";

export const StyledUIContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  @media (max-aspect-ratio: 7/5) {
    flex-direction: column;
  }
`;
