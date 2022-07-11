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

  @media (max-width: 1200px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    padding: 90px;
  }

  @media (max-width: 576px) {
    padding: 90px 50px;
  }

  will-change: transform;

  .source_body {
    margin: 5% 0 10% 0;
    font-size: 15px;
    line-height: 1.4em;

    @media (max-width: 768px) {
      font-size: 12px;
    }

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
      height: 52px;
      line-height: 52px;
      padding: 0 20px;
      border-color: ${({ theme }) => theme.colors.textAndEls};
      text-decoration: none;
      color: ${({ theme }) => theme.colors.textAndEls};
      background: ${({ theme }) => theme.colors.masterBackground};
      transition: all 0.2s ease;

      @media (max-width: 768px) {
        font-size: 12px;
        height: 40px;
        line-height: 40px;
      }

      .icon {
        position: relative;
        left: -7px;
        width: 30px;
        height: 30px;
        transform: translate(-50%, -50%);
        left: 2%;
        top: 50%;
        margin-right: 7px;
        filter: ${({ theme }) => theme.brightnessModes.iconBrightness};
        transition: filter 0.2s ease;

        @media (max-width: 768px) {
          width: 25px;
          height: 25px;
          left: 1%;
        }
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

  @media (max-width: 768px) {
    margin: 25px;
    height: 20px;
    width: 20px;
  }

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
