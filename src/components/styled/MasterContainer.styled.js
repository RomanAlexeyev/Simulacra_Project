import styled from "styled-components";

export const StyledMasterContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
`;
