import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
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

.vignette {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 3;
    background: radial-gradient(circle, rgba(0, 0, 0, 0) 1%, rgba(0, 0, 0, 1) 100%);
    opacity: 0.7;
}

.cursor-container {
    position: absolute;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
}

@font-face {
    font-family: Mexon;
    src: local('Mexon'), url(./assets/fonts/Mexon-ZVL2K.otf) format('opentype');
}

@font-face {
    font-family: Rajdhani;
    src: local('Rajdhani-Regular'), url(./assets/fonts/Rajdhani-Regular.ttf) format('truetype');
    font-weight: medium;
}

@font-face {
    font-family: Rajdhani;
    src: local('Rajdhani-Bold'), url(./assets/fonts/Rajdhani-Bold.ttf) format('truetype');
    font-weight: bold;
}

@font-face {
    font-family: Morganite;
    src: local('Morganite-Light'), url(./assets/fonts/Morganite-Light.ttf) format('truetype');
    font-weight: lighter;
}

@font-face {
    font-family: Morganite;
    src: local('Morganite-Bold'), url(./assets/fonts/Morganite-Bold.ttf) format('truetype');
    font-weight: bold;
}

@keyframes laptopZoomOut50 {
    to {
        width: 50%;
        min-width: 0;
        min-height: 0;
        transform: translate(0, 0);
        top: 0;
    }
}

@keyframes laptopZoomOut75 {
    to {
        width: 75%;
        min-width: 0;
        min-height: 0;
        left: 25%;
        transform: translate(0, 0);
        top: 0;
    }
}

@keyframes laptopZoomOut100 {
    to {
        width: 100%;
        min-width: 0;
        min-height: 0;
        left: 0;
        transform: translate(0, 0);
        top: 0;
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

@keyframes menuItemZoomOut {
    to {
        transform: translateY(35px);
        font-size: 1vw;
        margin-top: 0;
        margin-bottom: 1vw;
        -webkit-text-stroke: 0px rgb(0, 0, 0);
        text-shadow: none;
    }
}

@keyframes shardsContainerAwayAndBack {
    0% {
        transform: translate(-50%, -50%) scale(1);
    }

    40% {
        transform: translate(-50%, -50%) scale(2);
    }

    100% {
        transform: translate(-50%, -50%) scale(1);
    }
}

@keyframes shardsContainerAway {
    0% {
        transform: translate(-50%, -50%) scale(1);
    }

    100% {
        transform: translate(-50%, -50%) scale(2);
    }
}

@keyframes logoZoomOut {
    to {
        font-size: 2vw;
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
    from {
        background-position: top left;
        background-size: 200% 100%;
        filter: hue-rotate(-20deg);
    }

    24.9% {
        background-position: top right;
    }

    25% {
        background-size: 100% 100%;
        filter: hue-rotate(0);
    }

    50.1% {
        background-position: bottom right;
        filter: hue-rotate(10deg);
    }

    75% {
        background-position: bottom left;
        filter: hue-rotate(0);
    }

    to {
        background-position: top left;
        background-size: 200% 100%;
        filter: hue-rotate(-20deg);
    }
}

@keyframes logoStrokeEnter {
    from {
        stroke-dasharray: 0 50%;
        stroke-dashoffset: 5%;
    }

    to {
        stroke-dasharray: 50% 0;
        stroke-dashoffset: -5%;
    }
}

@keyframes logoStrokeLeave {
    from {
        stroke-dasharray: 50% 0;
        stroke-dashoffset: -5%;
    }

    to {
        stroke-dasharray: 0 50%;
        stroke-dashoffset: 5%;
    }
}

@keyframes revealBettyImage {
    from {
        opacity: 0;
        transform: scale(0.8) translateX(0);
    }
    50% {
        opacity: 0.5;
        transform: scale(0.3) translateX(20%);
    }
    to {
        opacity: 1;
        transform: scale(0.8) translateX(35%);
    }
}

@keyframes slideUp {
    to {
        transform: translate(-50%, 0);
    }
}

@keyframes slideUpBottom {
    to {
        bottom: 0;
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

@keyframes popUp {
    from {
        transform: translate(-50%, -50%) scale(0);
    }
    80% {
        transform: translate(-50%, -50%) scale(1.2);
    }
    90% {
        transform: translate(-50%, -50%) scale(0.9);
    }
    95% {
        transform: translate(-50%, -50%) scale(1.1);
    }
    to {
        transform: translate(-50%, -50%) scale(1);
    }
}

@keyframes leaving {
    to {
        opacity: 0;
        transform: translateY(-60%);
    }
}

@keyframes fadeInSlideUp {
    from {
        opacity: 0;
        transform: translateY(30%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
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

@keyframes higlighted {
    from {
        color: white;
    }
    50% {
        color: #DB04D0;
    }
    to {
        color: white;
    }
}

@keyframes growUp {
    to {
        transform: scaleY(1);
    }
}

@keyframes growDown {
    to {
        transform: scaleY(0);
    }
}

@keyframes slideUpAndDown {
    from {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-5%);
    }
    to {
        transform: translateY(0);
    }
}



`;

export default GlobalStyles;
