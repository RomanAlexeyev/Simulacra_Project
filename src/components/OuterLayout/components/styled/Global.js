import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html,
body {
    background-color: rgb(0, 0, 0);
    overflow: hidden;
    min-height: 100vh;
}

img {
    display: block;
}

.preloader {
    width: 100vw;
    height: 100vh;
    background: black;
    color: white;
    position: relative;
    cursor: none;
    transition: opacity 2s ease 1s;

    .progress_bar {
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        height: 3px;
        width: 270px;
        background-color: #110E12;

        .progress_bar_colored {
            position: absolute;
            height: 100%;
            width: 0%;
            background-image: linear-gradient(90deg, rgb(99, 0, 156) 0%, rgb(166, 1, 130) 50%,rgb(227, 13, 120) 100%);
            animation: grow 3s ease-in-out forwards;
        }
    }
}

@keyframes grow {
    to {
        width: 100%;
    }
}


@keyframes laptopZoomOut50 {
    to {
        width: 50%;
        min-width: 0;
        min-height: 0;
        transform: translate(0, -75%);
    }
}

@keyframes laptopZoomOut75 {
    to {
        width: 75%;
        min-width: 0;
        min-height: 0;
        left: 25%;
        transform: translate(0, -75%);
    }
}

@keyframes laptopZoomOut100 {
    to {
        width: 100%;
        min-width: 0;
        min-height: 0;
        left: 0;
        transform: translate(0, -125%);
    }
}

@keyframes laptopZoomIn50 {
    from {
        width: 50%;
        min-width: 0;
        min-height: 0;
        transform: translate(0, -75%);
        opacity: 1;
    }
    50% {
        opacity: 0 
    }
    to {
        opacity: 1;
    }
}

@keyframes laptopZoomIn75 {
    from {
        width: 75%;
        min-width: 0;
        min-height: 0;
        left: 25%;
        transform: translate(0, -75%);
        opacity: 1;
    }
    50% {
        opacity: 0 
    }
    to {
        opacity: 1;
    }
}

@keyframes laptopZoomIn100 {
    from {
        width: 100%;
        min-width: 0;
        min-height: 0;
        left: 0;
        transform: translate(0, -125%);
        opacity: 1;
    }
    50% {
        opacity: 0 
    }
    to {
        opacity: 1;
    }
}

@keyframes laptopScreenZoomOut {
    to {
        width: 42%;
        height: 33.5%;
        transform: translate(-50%, -50%) perspective(1.6vw) rotateY(-1deg);
        filter: contrast(1.05) hue-rotate(10deg);
    }
}

@keyframes laptopScreenZoomIn {
    from {
        width: 42%;
        height: 33.5%;
        transform: translate(-50%, -50%) perspective(1.6vw) rotateY(-1deg);
        filter: contrast(1.05) hue-rotate(10deg);
    }
    to {
        width: 56.8%;
        height: 40.2%;
        transform: translate(-50%, -50%) perspective(1.2vw);
        filter: contrast(1) hue-rotate(0deg);
    }
}

@keyframes logoZoomOut {
    to {
        font-size: 2vw;
    }
}

@keyframes logoZoomIn {
    from {
        font-size: 2vw;
    }
    to {
        font-size: 16vh;
    }
}

@keyframes logoZoomIn7_5 {
    from {
        font-size: 2vw;
    }
    to {
        font-size: 10vw;
    }
}

@keyframes logoZoomIn4_5 {
    from {
        font-size: 2vw;
    }
    to {
        font-size: 20vw;
    }
}


@keyframes menuItemZoomOut {
    to {
        font-size: 1vw;
    }
}

@keyframes menuItemZoomIn {
    from {
        font-size: 1vw;
    }
    to {
        font-size: 6.5vh;
    }
}

@keyframes menuItemZoomIn4_5 {
    from {
        font-size: 1vw;
    }
    to {
        font-size: 7vw;
    }
}

@keyframes menuItemZoomInAbout {
    from {
        font-size: 1vw;
    }
    to {
        font-size: 9vh;
    }
}

@keyframes menuItemZoomInAbout4_5 {
    from {
        font-size: 1vw;
    }
    to {
        font-size: 10vw;
    }
}

@keyframes shardsContainerAway {
    to {
        transform: translate(-50%, -50%) scale(2);
    }
}

@keyframes shardsContainerBring {
    to {
        transform: translate(-50%, -50%) scale(1);
    }
}


@keyframes rotation {
    0% {
        -webkit-transform: rotate3d(0, 0, 1, 0deg) scale(1);
        transform: rotate3d(0, 0, 1, 0deg) scale(1);
        filter: hue-rotate(-20deg);
    }

    25% {
        -webkit-transform: rotate3d(0, 0, 1, 90deg) scale(0.7);
        transform: rotate3d(0, 0, 1, 90deg) scale(0.7);
        filter: hue-rotate(0);
    }

    50% {
        -webkit-transform: rotate3d(0, 0, 1, 180deg) scale(0.9);
        transform: rotate3d(0, 0, 1, 180deg) scale(0.9);
        filter: hue-rotate(20deg);
    }

    75% {
        -webkit-transform: rotate3d(0, 0, 1, 270deg) scale(0.8);
        transform: rotate3d(0, 0, 1, 270deg) scale(0.8);
        filter: hue-rotate(0);
    }

    100% {
        -webkit-transform: rotate3d(0, 0, 1, 360deg) scale(1);
        transform: rotate3d(0, 0, 1, 360deg) scale(1);
        filter: hue-rotate(-20deg);
    }
}

@keyframes floatAnimation_1 {
    0% {
        transform: rotate3d(0, 0, 1, 0deg) translate(0, 0);
    }

    50% {
        transform: rotate3d(1, 1, 1, 10deg) translate(0, -20%);
    }

    100% {
        transform: rotate3d(0, 0, 1, 0deg) translate(0, 0);
    }
}

@keyframes floatAnimation_2 {
    0% {
        transform: rotate3d(0, 0, 1, 0deg) translate(0, 0);
    }

    50% {
        transform: rotate3d(1, 1, 1, -5deg) translate(0, -20%);
    }

    100% {
        transform: rotate3d(0, 0, 1, 0deg) translate(0, 0);
    }
}

@keyframes floatAnimation_3 {
    0% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(0, -20%);
    }

    100% {
        transform: translate(0, 0);
    }
}

@keyframes circleText {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
    }
}

@keyframes flashing {
    0% {
        transform: scale(1);
        opacity: 1;
    }

    50% {
        transform: scale(0.8);
        opacity: 0.2;
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes logoColorAnimation {
    50% {
        background-size: 400% 400%;
      }
    to {
        background-size: 100% 100%;
      }
}

@keyframes slideFadeIn {
    to {
        opacity: 1;
        transform: translate(-50%, -50%);
    }
}

@keyframes authorSlideFadeIn {
    to {
        opacity: 1;
        transform: translate(0%, 0%);
    }
}

@keyframes slideFadeOut {
    from {
        opacity: 1;
        transform: translate(-50%, -50%);
    }
    to {
        opacity: 0;
        transform: translate(-50%, -50%);
    }
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}

@keyframes fadeOut {
    to {
        opacity: 0;
    }
}

@keyframes scaleAndFade {
    from {
        transform: scale(2);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    80% {
        opacity: 0;
    }
    to {
        transform: scale(0);
        opacity: 0;
    }
}

@keyframes maskScreen {
    to {
        transform: translate(-50%, -50%) scale(4);
        opacity: 1;
    }
}



@keyframes leaving {
    to {
        opacity: 0;
        transform: translateY(-60%);
    }
}



@keyframes fadeSlideUpAndDissapear {
    from {
        opacity: 0;
        transform: translateY(30%);
    }
    10% {
        opacity: 1;
        transform: translateY(0); 
    }
    90% {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(30%);
    }
}
`;

export default GlobalStyles;
