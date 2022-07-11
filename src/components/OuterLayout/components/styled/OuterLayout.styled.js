import styled from "styled-components";

export const StyledOuterLayout = styled.div`
  height: 100vh;
  width: 100%;
  cursor: ${({ zoom }) => (zoom === "out" ? "auto" : "none")};

  position: fixed;
  top: 0;
  left: 0;
`;

export const StyledAuthorContainer = styled.div`
  visibility: ${({ menuItem }) =>
    menuItem === "menu_author" ? "visible" : "hidden"};
  opacity: ${({ zoom }) => (zoom === "in" ? 0 : 1)};
  transition: opacity 1s ease;

  .colored_bg {
    height: 100%;
    width: 50%;
    position: absolute;
    opacity: ${({ menuItem }) => (menuItem === "menu_author" ? 1 : 0)};
    transition: opacity 2s ease 2s;
  }

  .main_photo {
    height: 85%;
    aspect-ratio: 1/1.2;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 45%;
    top: 50%;
    opacity: ${({ menuItem }) => (menuItem === "menu_author" ? 1 : 0)};
    transition: opacity 2s ease-in-out 2s;

    @media (max-width: 1200px) {
      left: 25%;
    }

    @media (max-aspect-ratio: 1/1) {
      display: none;
    }

    @media (max-width: 576px) {
      display: block;
      width: 100%;
      height: auto;
      left: 45%;
      top: 60%;
    }
  }

  .main_info {
    position: absolute;
    height: 100%;
    width: 50%;
    margin-left: 7%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    font-family: "HelveticaUltraLight";

    @media (max-width: 1200px) {
      justify-content: flex-end;
    }

    @media (max-width: 576px) {
      width: 100%;
    }

    h1 {
      font-family: "HelveticaMedium";
      font-size: 3.5rem;
      transform: ${({ menuItem }) =>
        `translateY(${menuItem === "menu_author" ? "0" : "-50%"})`};
      opacity: ${({ menuItem }) => (menuItem === "menu_author" ? 1 : 0)};
      transition: all 2s ease-in-out 2s;
      letter-spacing: -0.15rem;

      @media (max-width: 1200px) {
        font-size: 2.5rem;
      }

      @media (max-width: 576px) {
        font-size: 8vw;
      }
    }

    h2 {
      margin-top: 2%;
      font-size: 1.7rem;
      line-height: 2.7rem;
      transform: ${({ menuItem }) =>
        `translateY(${menuItem === "menu_author" ? "0" : "-50%"})`};
      opacity: ${({ menuItem }) => (menuItem === "menu_author" ? 1 : 0)};
      transition: all 2s ease-in-out 2s;
      letter-spacing: 0.1rem;

      @media (max-width: 1200px) {
        font-size: 1.2rem;
        line-height: 2rem;
      }

      @media (max-width: 576px) {
        font-size: 4vw;
        line-height: 1.5rem;
      }
    }

    .contacts {
      margin-top: 5%;
      font-family: "HelveticaThin";
      font-size: 1.3rem;

      @media (max-width: 1200px) {
        font-size: 1rem;
        margin-bottom: 10%;
      }

      @media (max-width: 576px) {
        margin-top: 3%;
        font-size: 4vw;
      }

      .contact {
        display: flex;
        align-items: center;
        margin: 5% 0;
        transform: ${({ menuItem }) =>
          `translateX(${menuItem === "menu_author" ? "0" : "-10%"})`};
        opacity: ${({ menuItem }) => (menuItem === "menu_author" ? 1 : 0)};
        transition: all 2s ease-in-out 2s;

        .contact_icon {
          margin-right: 1.5rem;
          height: 1.3rem;
        }

        &.phone {
          margin-left: -0.4rem;

          .contact_icon {
            margin-right: 1rem;
            height: 2rem;
          }
        }
      }
    }
  }

  .return_button_container {
    position: absolute;
    height: 100%;
    width: 50%;
    right: 0;

    @media (max-width: 1200px) {
      width: 75%;
    }

    @media (max-aspect-ratio: 1/1) {
      left: 0;
    }

    @media (max-width: 576px) {
      width: 100%;
    }

    .return_button {
      background-image: linear-gradient(
        90deg,
        rgb(99, 0, 156) 0%,
        rgb(166, 1, 130) 50%,
        rgb(227, 13, 120) 100%
      );
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      font-family: "Mexon";
      position: absolute;
      left: 50%;
      top: 70%;
      font-size: 1.2vw;
      border: 1px solid rgb(166, 1, 130);
      padding: 10px 20px;
      cursor: pointer;
      transform: ${({ menuItem }) =>
        `translate(-50%, ${menuItem === "menu_author" ? "-50%" : "0%"})`};
      opacity: ${({ menuItem }) => (menuItem === "menu_author" ? 1 : 0)};
      transition: transform 2s ease-in-out 2s, opacity 2s ease-in-out 2s,
        filter 0.3s ease;

      @media (max-aspect-ratio: 1/1) {
        top: 40%;
        left: 25%;
        font-size: 3vw;
      }

      @media (max-width: 576px) {
        top: 10%;
        left: 50%;
      }

      &:hover {
        filter: drop-shadow(0 0 15px rgb(236, 12, 199));
      }
    }
  }
`;
