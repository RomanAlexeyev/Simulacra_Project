import styled from "styled-components";

export const StyledMasterContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.masterBackground};
`;

export const StyledVignette = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
  background: radial-gradient(
    at top,
    rgba(0, 0, 0, 0) 1%,
    rgba(0, 0, 0, 0.5) 100%
  );
  opacity: 0.7;
`;
