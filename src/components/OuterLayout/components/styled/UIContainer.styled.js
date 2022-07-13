import styled from "styled-components";

export const StyledUIContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  font-family: "Mexon";
  position: relative;

  @media (max-aspect-ratio: 7/5) {
    flex-direction: column;
  }

  .side_writing {
    position: absolute;
    transform: translateY(-50%);
    z-index: 3;
    writing-mode: vertical-rl;
    text-orientation: upright;
    font-size: 1vh;
    letter-spacing: 4.5vh;
    top: calc(50% + 20px);
    color: ${({ theme }) => theme.colors.textAndEls};
    opacity: ${({ zoom }) => (zoom === "out" ? 0 : 1)};
    transition: all 1s ease 0.7s;

    @media (max-aspect-ratio: 7/5) {
      display: none;
    }

    &.left {
      left: 5%;
    }

    &.right {
      right: 5%;
    }
  }
`;
