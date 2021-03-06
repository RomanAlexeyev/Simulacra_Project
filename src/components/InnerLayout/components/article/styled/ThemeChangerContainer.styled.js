import styled from "styled-components";

export const StyledThemeChangerContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 7;
  font-family: "HelveticaBold";
  color: ${({ currentTheme }) => (currentTheme === "dark" ? "white" : "black")};
  position: relative;
  cursor: none;

  &.leaving {
    animation: fadeOut 2s ease 1s forwards;
  }

  .theme_mask {
    width: 100%;
    height: 100%;
    background: ${({ currentTheme }) =>
      currentTheme === "dark" ? "white" : "black"};
    opacity: 0;
    animation: ${({ maskIsOn }) =>
      maskIsOn  ? "fadeIn 2.5s forwards;" : "none"};
  }

  .opposite_word {
    white-space: nowrap;
    position: absolute;
    opacity: 0;
    transform: translate(-50%, -50%);
    transition: all 0.5s ease;
    animation: ${({ maskIsOn }) =>
      maskIsOn  ? "maskScreen 2.5s forwards;" : "none"};
    /* animation: maskScreen 2s ease forwards; */

    &#word_1 {
      font-size: 15vw;
      left: 55%;
      top: 65%;
      letter-spacing: -1rem;
      @media (max-width: 576px) {
        font-size: 35vw;
      }

      @media (max-width: 992px) {
        font-size: 25vw;
      }
    }
    &#word_2 {
      font-size: 18vw;
      left: 45%;
      top: 40%;
      letter-spacing: -1rem;
      @media (max-width: 576px) {
        font-size: 30vw;
      }

      @media (max-width: 992px) {
        font-size: 22vw;
      }
    }
    &#word_3 {
      font-size: 6vw;
      left: 80%;
      top: 90%;
      letter-spacing: -0.5rem;
      @media (max-width: 576px) {
        font-size: 15vw;
      }

      @media (max-width: 992px) {
        font-size: 10vw;
      }
    }
    &#word_4 {
      font-size: 2vw;
      left: 60%;
      top: 70%;
      letter-spacing: -0.2rem;
      @media (max-width: 576px) {
        font-size: 5vw;
      }
      @media (max-width: 992px) {
        font-size: 4vw;
      }
    }
    &#word_5 {
      font-size: 7vw;
      left: 20%;
      top: 10%;
      letter-spacing: -0.5rem;
      @media (max-width: 576px) {
        font-size: 12vw;
      }
      @media (max-width: 992px) {
        font-size: 10vw;
      }
    }
    &#word_6 {
      font-size: 4vw;
      left: 20%;
      top: 25%;
      @media (max-width: 576px) {
        font-size: 10vw;
      }
      @media (max-width: 992px) {
        font-size: 8vw;
      }
    }
    &#word_7 {
      font-size: 10vw;
      left: 70%;
      top: 20%;
      @media (max-width: 576px) {
        font-size: 30vw;
      }
      @media (max-width: 992px) {
        font-size: 20vw;
      }
    }
    &#word_8 {
      font-size: 15vw;
      left: 20%;
      top: 85%;
      letter-spacing: -0.8rem;
      @media (max-width: 576px) {
        font-size: 15vw;
      }
      @media (max-width: 992px) {
        font-size: 12vw;
      }
    }
  }
`;
