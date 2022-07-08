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
    position: absolute;
    opacity: ${({ menuItem }) => (menuItem === "menu_author" ? 1 : 0)};
    transition: opacity 2s ease 2s;
  }

  .main_photo {
    height: 90%;
    aspect-ratio: 1/1.2;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 45%;
    top: 50%;
    opacity: ${({ menuItem }) => (menuItem === "menu_author" ? 1 : 0)};
    transition: opacity 2s ease-in-out 2s;
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

    h1 {
      font-family: "HelveticaMedium";
      font-size: 3.5rem;
      transform: ${({ menuItem }) =>
        `translateY(${menuItem === "menu_author" ? "0" : "-50%"})`};
      opacity: ${({ menuItem }) => (menuItem === "menu_author" ? 1 : 0)};
      transition: all 2s ease-in-out 2s;
      letter-spacing: -0.15rem;
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
    }

    .contacts {
      margin-top: 5%;
      font-family: "HelveticaThin";
      font-size: 1.3rem;

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
`;
