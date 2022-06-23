import styled from "styled-components";

export const StyledOuterLayout = styled.div`
  height: 100vh;
  width: 100%;
  cursor: ${({zoom}) => zoom === 'out' ? 'auto' : 'none'};
`;
