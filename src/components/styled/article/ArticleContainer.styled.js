import styled from "styled-components";

export const StyledArticleContainer = styled.div`
  position: absolute;
  z-index: 5;
  transform: translate(-50%, 0);
  top: 101%;
  left: 50%;
  width: 60vw;
  height: 90vh;
  cursor: none;

  display: flex;
  flex-direction: column;
  overflow: visible;

  background: rgba(10, 10, 20, 0.2);
  backdrop-filter: blur(9px);
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
    /* flex: 5; */
    padding: 0 5%;
    color: white;
    font-family: Rajdhani;
    font-size: 12pt;
    line-height: 1.5em;
    mask-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 85%,
      rgba(0, 0, 0, 0) 100%
    );

    h3 {
      font-size: 16pt;
      font-weight: 500;
      line-height: 1.6em;
    }

    p {
      margin-top: 30px;
    }
  }
`;

export const StyledSection = styled.section`
  /* margin-top: 10%;
  height: 100%; */
  width: 100%;
  display: flex;
  flex-direction: column;
  /* opacity: 1; */
  /* transform: translateY(0); */
  animation: ${({ leaving }) =>
    leaving ? "sectionLeaving 0.7s ease-out forwards" : "none"};

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

    span {
      &.highlighted {
        animation: higlighted 1s ease;

        &#hl_1 {
          animation-delay: 1s;
        }
        &#hl_2 {
          animation-delay: 1.25s;
        }
        &#hl_3 {
          animation-delay: 1.5s;
        }
        &#hl_4 {
          animation-delay: 1.75s;
        }
      }
    }
  }

  .textAndImage {
    height: 100%;
  }

  .text {
    /* height: 100%; */

    #wikipedia_logo {
      position: relative;
      height: 250px;
      width: 250px;
      float: right;
      right: -12%;
      margin-left: -5%;

      img {
        animation: floatAnimation_3 10s ease-in-out infinite;
      }
    }
  }

  .illustration {
    /* height: 100%; */
    height: 30vw;
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
        transform-origin: 0 100%;
        transform: scaleY(1);
        animation: growDown 0.5s ease-out forwards;
      }

      &#image_box_1 {
        animation-delay: 1s;

        .img_mask {
          animation-delay: 1.5s;
        }
      }
      &#image_box_2 {
        animation-delay: 1.25s;

        .img_mask {
          animation-delay: 1.75s;
        }
      }
      &#image_box_3 {
        animation-delay: 1.5s;

        .img_mask {
          animation-delay: 2s;
        }
      }
      &#image_box_4 {
        animation-delay: 1.75s;

        .img_mask {
          animation-delay: 2.25s;
        }
      }

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

export const StyledContent = styled.div`
  margin-top: 5%;
  width: 100%;
  /* display: flex;
  flex-direction: column; */
`;

export const StyledArticleProgressBar = styled.div`
  width: 100%;
  height: 2px;
  margin-top: 15px;
  background-image: linear-gradient(
    90deg,
    rgb(99, 0, 156) 0%,
    rgb(166, 1, 130) 50%,
    rgb(227, 13, 120) 100%
  );
`;
