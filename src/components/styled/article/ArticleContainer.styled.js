import styled from "styled-components";
import maskImage from "../../article/images/hero_image_mask.png";

export const StyledArticleProgressBar = styled.div`
  width: ${({ progressIdx }) => `${progressIdx * 7.7}%`};
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
    display: flex;
    justify-content: center;
    align-items: center;

    .title {
      margin-top: 2%;
      position: relative;
      font-family: "Mexon";
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
    overflow: ${({ isTouchDevice }) => (isTouchDevice ? "scroll" : "hidden")};
    width: 100%;
    height: 100%;
    padding: 0 7%;
    color: white;
    font-family: "HelveticaThin";
    font-size: 15px;
    line-height: 1.7em;
    mask-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 90%,
      rgba(0, 0, 0, 0) 100%
    );

    h1 {
      font-family: "HelveticaBold";
      font-size: 6vw;
      line-height: 0.9em;
      letter-spacing: -0.08em;
    }

    h3 {
      font-family: "HelveticaBold";
      font-size: 35px;
      line-height: 0.9em;
      letter-spacing: -0.05em;
    }

    h5 {
      font-family: "HelveticaBold";
      font-size: 15px;
      line-height: 1.2em;
      letter-spacing: -0.05em;
    }

    b {
      font-family: "HelveticaMedium";
    }

    p {
      margin: 5% 0;
      transition: transform 1s ease-in-out;
    }
  }
`;

export const StyledContent = styled.div`
  margin-top: 5%;
  width: 100%;
  transform: ${({ prog }) => "translateY(-" + prog * 200 + "px)"};
  transition: transform 1s ease-in-out;
`;

export const StyledSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 7%;
  margin-bottom: 10%;

  &#stages {
    grid-template-rows: repeat(2, 1fr);
  }

  &.short_bottom {
    margin-bottom: 5%;
  }

  &.centered {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p {
      text-align: center;
    }
  }

  .hero_title {
    text-align: right;

    h1 {
      margin: 10%;
    }

    .wiki_article {
      margin: 20% 10% 0 10%;
      padding: 5% 10%;
      font-size: 18px;
      border: 1px dashed white;
      border-radius: 10px;
      position: relative;

      #wiki-logo {
        height: 40%;
        position: absolute;
        transform: translate(-50%, -50%);
        left: -2%;
        top: 30%;
      }
    }
  }

  .hero_image {
    position: relative;

    #hero-image-apollo {
      position: absolute;
      left: -20%;
      /* width: 120%; */
      width: 130%;
      aspect-ratio: 4/4.6;
    }

    #lightspot {
      position: absolute;
      max-width: 150%;
      max-height: 150%;
      transform: translate(-50%, 0);
      left: 30%;
      top: 0;
      mix-blend-mode: screen;
    }

    #animation-container {
      position: absolute;
      left: -20%;
      /* width: 125%; */
      width: 130%;
      aspect-ratio: 4/4.6;
      overflow: hidden;
      mask-image: url(${maskImage});
      mask-size: cover;
      opacity: 0;
      animation: fadeIn 1s linear 2s forwards;

      #circle-text {
        width: auto;
        height: 100%;
        animation: circleText 0.9s steps(19) infinite;
      }
    }

    #scroll_icon_container {
      position: absolute;
      left: -10%;
      width: 20px;
      opacity: 0;
      transform: translateY(30%);
      animation: fadeSlideUpAndDissapear 3.5s ease 3s;

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

  .lightspot {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    max-width: 200%;
    mix-blend-mode: screen;
  }

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all 1.5s ease-in-out;

    &.baudrillard {
      justify-content: flex-start;
    }

    &.simulacra_stages {
      grid-column: span 2;

      .image_container_stages {
        width: 500px;
        height: 300px;
        margin: 0 auto;
        position: relative;

        .simulacra_stage_image {
          position: absolute;
          transition: transform 1s ease-in-out;
          /* transform: translate(-50%, -50%); */
          /* max-width: 100%; */

          &#pika_photo {
            width: 50%;
            top: -40%;
            left: 40%;
          }
          &#pika_drawing {
            width: 25%;
            top: -20%;
            left: 25%;
          }
          &#pikachu {
            width: 60%;
            top: -15%;
            left: 45%;
          }
          &#pokemon_go {
            width: 50%;
            top: 20%;
            left: 55%;
          }
          &#lightspot {
            top: -10%;
            left: 40%;
          }
        }
      }
    }

    #just_a_copy {
      margin: 5% 0;
      position: relative;

      #question_mark {
        position: absolute;
        left: 70%;
        font-size: 24vw;
        font-family: "HelveticaMedium";
        transform-origin: 100% 200%;
        transform: rotate(90deg);
        opacity: 0;
        transition: all 1s ease-in-out;

        &.is_visible {
          transform: rotate(0deg);
          opacity: 1;
        }
      }
    }

    &.wiki {
      flex-direction: column;
    }
    .image_container {
      position: relative;
      transition: all 1.5s ease-in-out;

      &.wiki {
        height: 200px;
      }

      &.baudrillard {
        position: absolute;
        height: 10vw;
        width: 30%;
        left: 57%;
      }

      &.face_robot {
        position: absolute;
        height: 150%;
        left: 50%;
        top: 60%;
      }

      #escaping_criticism {
        max-height: 100%;
        width: auto;
      }

      #baudrillard {
        max-height: 100%;
        width: auto;
      }

      #face_human {
        max-height: 100%;
        width: auto;
      }

      #face_robot {
        max-height: 100%;
        width: auto;
      }

      .image_title_author {
        font-size: 10px;
        margin-top: 10px;
        line-height: 15px;
        text-align: center;

        p {
          margin-top: 0;
        }
      }
    }
  }

  .text {
    /* height: max-content; */
    width: 100%;
    position: relative;

    .divider {
      height: 1px;
      background: white;
      width: 200%;
      margin-bottom: 10%;
      transition: transform 1s ease-out;
    }

    &.left {
      text-align: right;
      .divider {
        float: right;
        transform: translateX(-100%);
        &.is_visible {
          transform: translateX(0);
        }
      }
    }

    &.right {
      text-align: left;
      .divider {
        float: left;
        transform: translateX(100%);
        &.is_visible {
          transform: translateX(0);
        }
      }
    }

    &.simulacra_stages {
      margin-top: 10%;
    }

    .movies_names_container {
      width: 100%;
      height: 100%;
      position: relative;

      &.is_visible {
        .movie_name {
          animation: scaleAndFade 4s ease-in-out;
        }
      }

      .movie_name {
        position: absolute;
        white-space: nowrap;
        letter-spacing: -1px;
        transform: scale(2);
        opacity: 0;

        &#replicants {
          font-size: 28px;
          left: 5%;
          animation-delay: 1s;
        }
        &#mrdata {
          font-size: 18px;
          left: 40%;
          top: 14%;
          animation-delay: 2s;
        }
        &#matrix {
          font-size: 40px;
          left: 0%;
          top: 28%;
          animation-delay: 1.75s;
        }
        &#mecha {
          font-size: 28px;
          left: 50%;
          top: 35%;
          animation-delay: 0.75s;
        }
        &#pulpfiction {
          font-size: 17px;
          left: 30%;
          top: 50%;
          animation-delay: 2.5s;
        }
        &#truman {
          font-size: 28px;
          left: 40%;
          top: 65%;
          animation-delay: 1s;
        }
        &#samantha {
          font-size: 35px;
          left: 10%;
          top: 80%;
          animation-delay: 1.5s;
        }
      }
    }

    .movies_list {
      li {
        transform: translateX(30%);
        opacity: 0;
        transition: all 0.4s ease-out;
        &:nth-child(1) {
          transition-delay: 0.25s;
        }
        &:nth-child(2) {
          transition-delay: 0.3s;
        }
        &:nth-child(3) {
          transition-delay: 0.35s;
        }
        &:nth-child(4) {
          transition-delay: 0.4s;
        }
        &:nth-child(5) {
          transition-delay: 0.45s;
        }
        &:nth-child(6) {
          transition-delay: 0.5s;
        }
        &:nth-child(7) {
          transition-delay: 0.55s;
        }
      }
      &.is_visible {
        li {
          transform: translateX(0);
          opacity: 1;
        }
      }
    }

    .stages_by_baudrillard {
      text-align: left;
      margin-left: 200px;
      position: relative;
      transition: all 0.7s ease-in-out;

      &.is_visible {
        h5,
        h3 {
          opacity: 1;
          transform: translateY(0);
        }
        #number_four {
          opacity: 1;
          transform: translateX(0);
        }
      }

      h5 {
        opacity: 0;
        transform: translateY(-20%);
        transition: all 1s ease-in-out;
      }

      h3 {
        opacity: 0;
        transform: translateY(20%);
        transition: all 1s ease-in-out;
      }

      #number_four {
        font-family: "HelveticaBold";
        font-size: 400px;
        position: absolute;
        left: -200px;
        top: 180px;
        opacity: 0;
        transform: translateX(-20%);
        transition: all 1s ease-in-out;
      }
    }

    .simulacra_stage {
      display: flex;
      line-height: 18px;
      opacity: 0;
      transition: all 1s ease-in-out;

      &.is_visible {
        &#stage_one,
        &#stage_two,
        &#stage_three,
        &#stage_four {
          opacity: 1;
          transform: translateY(0px);
        }
      }

      .stage_description {
        margin-left: 10px;
      }

      &#stage_one {
        transform: translateY(-20px);
      }
      &#stage_two {
        transform: translateY(-70px);
        margin-left: 10%;
      }
      &#stage_three {
        transform: translateY(-120px);
        margin-left: 20%;
      }
      &#stage_four {
        transform: translateY(-170px);
        margin-left: 30%;
      }

      .stage_number {
        font-size: 100px;
        line-height: 80px;
        height: max-content;
      }
    }

    .closer_line {
      text-align: center;
      min-height: 20px;
      position: relative;
    }

    #opposite_word {
      font-size: 20px;
      font-family: "HelveticaBold";
      position: absolute;
      /* transform: translate(-50%, -50%); */
      left: 50%;
      top: 50%;
    }
  }

  .text_slider {
    margin-top: 5%;
    width: 100%;
    white-space: nowrap;
    transition: transform 1s ease-out;

    h1 {
      font-size: 5vw;
    }
  }

  .image_slider {
    margin-top: 5%;
    width: 3300px;
    height: 150px;
    position: relative;

    #movies_slider {
      height: 100%;
      transition: transform 1s ease-out;
    }

    #image_slider_mask {
      position: absolute;
      top: 0;
      left: -10%;
      width: 120%;
      height: 100%;
      background-image: linear-gradient(
        90deg,
        rgb(99, 0, 156) 0%,
        rgb(166, 1, 130) 50%,
        rgb(227, 13, 120) 100%
      );
      mix-blend-mode: screen;
      opacity: 0.6;
    }
  }

  .slider {
    width: 100%;
  }
`;
