import styled from "styled-components";

export const StyledSourceContainer = styled.div`
  background: ${({ theme }) => theme.colors.masterBackground};
  min-height: 200px;
  border-radius: 10px;
  width: 50%;
  position: absolute;
  opacity: 0;
  transform: translate(-50%, -30%);
  left: 50%;
  top: 50%;
  padding: 100px;
  color: ${({ theme }) => theme.colors.textAndEls};
  font-family: "HelveticaLight";
  font-size: 20px;
  line-height: 1.5em;
  text-align: center;
  animation: ${({ leaving }) =>
    leaving
      ? "slideFadeOut 0.7s ease forwards"
      : "slideFadeIn 1s ease-in-out 0.7s forwards"};

    will-change: transform;

  .source_body {
    margin: 5% 0 10% 0;
    font-size: 15px;
    line-height: 1.4em;

    .libraries {
      margin-top: 5%;
      font-family: "HelveticaMedium";

      .library_item {
        margin-bottom: 1rem;
      }
    }
  }

  .source_footer {
    display: flex;
    flex-direction: column;
    align-items: center;

    .github_button {
      width: max-content;
      display: flex;
      margin-top: 5%;
      font-size: 15px;
      border: 1px solid;
      border-radius: 28px;
      padding: 10px 20px;
      border-color: ${({ theme }) => theme.colors.textAndEls};
      text-decoration: none;
      color: ${({ theme }) => theme.colors.textAndEls};
      background: ${({ theme }) => theme.colors.masterBackground};
      transition: all 0.2s ease;

      .icon {
        position: relative;
        left: -7px;
        width: 30px;
        height: 30px;
        margin-right: 7px;
        filter: ${({ theme }) => theme.brightnessModes.iconBrightness};
        transition: filter 0.2s ease;
      }

      &:hover {
        background: ${({ theme }) =>
          theme.theme === "dark" ? "white" : "black"};
        color: ${({ theme }) => (theme.theme === "dark" ? "black" : "white")};

        .icon {
          filter: ${({ theme }) =>
            `brightness(${theme.theme === "dark" ? 0 : 1})`};
        }
      }
    }
  }
`;

export const StyledCloseButton = styled.div`
  height: 30px;
  width: 30px;
  position: absolute;
  right: 0;
  top: 0;
  margin: 50px;
  cursor: pointer;

  &::before,
  &::after {
    content: " ";
    width: 1px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.textAndEls};
    position: absolute;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;
