import styled from "styled-components";

export const StyledCursorContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 1;
`;

export const StyledCustomCursor = styled.div`
  position: absolute;
  pointer-events: none;
  transform: translate(-50%, -50%);
  width: 150px;
  opacity: ${({ visible }) => (visible ? 1 : 0)};

  &.trail {
    filter: blur(20px);
  }

  &#custom_cursor_trail_1 {
    transition: all 0.7s ease-out;
  }
  &#custom_cursor_trail_2 {
    transition: all 0.6s ease-out;
  }
  &#custom_cursor_trail_3 {
    transition: all 0.5s ease-out;
  }
  &#custom_cursor_trail_4 {
    transition: all 0.42s ease-out;
  }
  &#custom_cursor_trail_5 {
    transition: all 0.35s ease-out;
  }
  &#custom_cursor_main {
    transform: ${({ mouseMoveListening }) =>
      `translate(-50%, -50%) scale(${mouseMoveListening ? 1 : 20})`};
    transition: all 0.3s ease-out;
    img {
      animation: rotation 15s linear infinite;
    }
  }
`;
