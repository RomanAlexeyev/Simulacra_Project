import styled from "styled-components";

export const StyledArticleProgressBar = styled.div`
  width: ${({progressIdx}) => `${(progressIdx*7.7)}%`};
  transition: width 0.5s ease-out;
  height: 2px;
  position: absolute;
  top: 150%;
  background-image: linear-gradient(
    90deg,
    rgb(99, 0, 156) 0%,
    rgb(166, 1, 130) 50%,
    rgb(227, 13, 120) 100%
  );
`;

export const StyledArticleContainer = styled.div`
/* margin-top: 200px; */
  position: absolute;
  z-index: 5;
  transform: translate(-50%, 100%);
  bottom: 0;
  left: 50%;
  height: 90vh;
  width: 60vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: none;

  background: rgba(0, 0, 0, 0.8);
  /* backdrop-filter: blur(4px); */
  border-radius: 10px 10px 0 0;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 50px rgba(0, 0, 0, 0.8);

  animation: slideUp 1s ease-out 0.7s forwards;

  .article_header {
    width: 100%;
    min-height: 100px;
    /* flex: 1; */
    display: flex;
    justify-content: center;
    align-items: center;

    .title {
      margin-top: 2%;
      position: relative;
      font-family: Mexon;
      font-size: 30px;
      letter-spacing: 2px;
      background-image: linear-gradient(
        90deg,
        rgb(99, 0, 156) 0%,
        rgb(166, 1, 130) 50%,
        rgb(227, 13, 120) 100%
      );
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
  }

  .article_body {
    width: 100%;
    height: 100%;
    padding: 0 5%;
    color: white;
    font-family: Rajdhani;
    font-size: 12pt;
    line-height: 1.5em;
    mask-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 90%,
      rgba(0, 0, 0, 0) 100%
    );

    h3 {
      font-size: 16pt;
      font-weight: 500;
      line-height: 1.6em;
    }

    p {
      margin-top: 30px;

      &.scrollCopies {
        b {
          font-size: 16pt;
        }
      }
    }
  }
`;

export const StyledContent = styled.div`
  margin-top: 5%;
  width: 100%;
  transform: ${({ prog }) => "translateY(-" + prog*300 + "px)"};
  transition: transform 1s ease-in-out;
`;

export const StyledWikiLogo = styled.div`
  position: ${({ outer }) => (outer ? "absolute" : "relative")};
  height: 250px;
  width: 250px;
  float: right;
  opacity: 1;
  right: ${({ outer }) => (outer ? "-5%" : "-12%")};
  top: ${({ outer }) => (outer ? "15%" : "0")};
  margin-left: -5%;
  filter: ${({ outer }) => (outer ? "blur(0)" : "blur(10px)")};
  opacity: ${({ outer }) => (outer ? 1 : 0.1)};
  transform: ${({ prog }) => "translateY(-" + prog * 10 + "%)"};
  transition: transform 0.5s ease-out;
  animation: ${({ prog }) =>
    prog > 0 ? "leaving 0.7s ease-out forwards" : "none"};

  img {
    animation: floatAnimation_3 10s ease-in-out infinite;
  }
`;

export const StyledSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* animation: ${({ leaving }) =>
    leaving ? "sectionLeaving 0.7s ease-out forwards" : "none"}; */

  .text-full {
    &.closer {
      height: calc(90vh - 100px);
      justify-content: center;

      .text {
        text-align: center;
        position: relative;

        #opposite_word {
          font-size: 16pt;
          position: absolute;
          left: 50%;
        }
      }
    }

    &.centered {
      margin-top: 10%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .slider {
        margin: 5% 0;

        img {
          width: 3300px;
          height: 150px;
        }
      }

      .text-list {
        display: flex;
        width: 100%;

        .list_block {
          flex: 1;
          margin: 0 5%;

          ul {
            li {
              opacity: 0;
              transition: opacity 0.7s ease;

              &.fade_in {
                opacity: 1;
              }
            }
          }
        }
      }
    }
  }

  .slider {
    width: 100%;
  }

  .text_image {
    width: 100%;
    display: flex;
    margin-top: 5%;
    height: 370px;
    align-items: center;

    &.robot {
      height: 200px;
    }

    .image {
      flex: 4;
      height: 100%;
      position: relative;

      .image_container {
        position: absolute;
        width: 100%;
        height: 100%;

        &.face {
          transition: all 0.7s ease;
        }

        &.pika {
          opacity: 0;
          transform: translateX(10%);
          transition: all 0.7s ease-out;

          &#pika_image_4 {
            transform: translate(15%, 30%);
          }

          &.show {
            opacity: 1;
            transform: translateX(0);
          }
        }

        &.pikachu_show {
          &#pika_image_3 {
            opacity: 1;
            transform: translateX(0);
          }
        }

        &.pokemon_go_show {
          &#pika_image_4 {
            opacity: 1;
            transform: translate(15%, 20%);
          }
        }

        &.reveal {
          animation: revealBettyImage 0.7s ease-out forwards;
        }

        &#betty_image_2,
        &#betty_image_3 {
          opacity: 0;
          transform: scale(0.8) translateX(0);
        }

        &#betty_image_1 {
          left: -15%;

          #backstrip {
            height: 80%;
            width: 25%;
          }
        }

        #backstrip {
          height: 100%;
          width: 30%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: linear-gradient(
            25deg,
            rgba(99, 0, 156, 1) 0%,
            rgba(166, 1, 130, 1) 50%,
            rgba(227, 13, 120, 1) 100%
          );
        }

        img {
          position: absolute;
          transform: translate(-50%, -50%);

          &.img_face {
            height: 200%;
            top: 55%;
            left: 50%;
          }

          &.betty_image {
            height: 80%;
            top: 50%;
            left: 50%;
          }

          &.pika_image {
            height: 100%;
            top: 50%;
            left: 50%;
          }

          &.portrait_scroll {
            animation: popUp 0.5s ease-in forwards;
          }

          &#portrait_main {
            height: 90%;
            top: 55%;
            left: 50%;
          }

          &#portrait_1 {
            height: 50%;
            top: 90%;
            left: 70%;
          }
          &#portrait_2 {
            height: 35%;
            top: 10%;
            left: 38%;
          }
          &#portrait_3 {
            height: 28%;
            top: 55%;
            left: 25%;
          }
          &#portrait_4 {
            height: 35%;
            left: 80%;
            top: 43%;
          }
          &#portrait_5 {
            height: 23%;
            top: 90%;
            left: 35%;
          }
        }
      }

      .stage_number {
        font-family: Morganite;
        font-size: 30em;
        height: 100%;
        position: absolute;
        background-image: linear-gradient(
          90deg,
          rgb(99, 0, 156) 0%,
          rgb(166, 1, 130) 50%,
          rgb(227, 13, 120) 100%
        );
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .text {
      flex: 5;
      height: max-content;

      ol {
        margin: 0 5%;
        li {
          opacity: 0;
          transition: opacity 0.7s ease;

          &.fade_in {
            opacity: 1;
          }
        }
      }
    }
  }

  span {
    &.highlighted {
      animation: higlighted 1s ease;

      &#hl_1 {
        animation-delay: 2s;
      }
      &#hl_2 {
        animation-delay: 2.25s;
      }
      &#hl_3 {
        animation-delay: 2.5s;
      }
      &#hl_4 {
        animation-delay: 2.75s;
      }
    }
  }

  .fade_slide_up {
    opacity: 0;
    transform: translateY(30%);
    animation: fadeInSlideUp 1.5s ease-out forwards;

    &.anim_1 {
      animation-delay: ${({ additionalDelay }) => additionalDelay + 0}s;
    }

    &.anim_2 {
      animation-delay: ${({ additionalDelay }) => additionalDelay + 0.2}s;
    }

    &.anim_3 {
      animation-delay: ${({ additionalDelay }) => additionalDelay + 0.4}s;
    }

    &.no_delay {
      animation-delay: 0s;
    }
  }

  .illustration {
    /* height: 100%; */
    height: 20vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5%;

    .wiki_images_container {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translateY(0);
      animation: slideUpAndDown 2.75s ease;
    }

    .image_box {
      flex: 1;
      margin: 3%;
      position: relative;
      transform-origin: 0 100%;
      transform: scaleY(0);
      animation: growUp 0.5s ease-out forwards;

      .img_mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          25deg,
          rgba(99, 0, 156, 1) 0%,
          rgba(166, 1, 130, 1) 50%,
          rgba(227, 13, 120, 1) 100%
        );
        transform-origin: 0 100%;
        transform: scaleY(1);
        animation: growDown 0.5s ease-out forwards;
      }

      &#image_box_1 {
        animation-delay: 2s;

        .img_mask {
          animation-delay: 2.5s;
        }
      }
      &#image_box_2 {
        animation-delay: 2.25s;

        .img_mask {
          animation-delay: 2.75s;
        }
      }
      &#image_box_3 {
        animation-delay: 2.5s;

        .img_mask {
          animation-delay: 3s;
        }
      }
      &#image_box_4 {
        animation-delay: 2.75s;

        .img_mask {
          animation-delay: 3.25s;
        }
      }
    }

    #scroll_icon_container {
      width: 20px;
      opacity: 0;
      transform: translateY(30%);
      animation: fadeSlideUpAndDissapear 3.5s ease;
      animation-delay: 3.5s;

      #scroll_icon {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        animation: flashing 2s ease-in-out infinite;

        .scroll_icon_arrow {
          opacity: 1;
          animation: fadeOut 1s ease infinite;

          &#scroll_icon_arrow_1 {
            animation-delay: 1s;
          }

          &#scroll_icon_arrow_2 {
            animation-delay: 1.15s;
          }

          &#scroll_icon_arrow_3 {
            animation-delay: 1.3s;
          }
        }
      }
    }
  }
`;
