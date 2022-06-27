import { useEffect, useState, useMemo } from "react";
import useThrottle from "../../custom_hooks/useThrottle";

import {
  StyledArticleContainer,
  StyledArticleProgressBar,
} from "../styled/article/ArticleContainer.styled";

import Content from "./Content";
import WikiLogo from "./WikiLogo";

function throttle(func, ms, leading) {
  let isThrottled = false;
  let lastThis;
  let lastArgs;

  function throttled() {
    if (isThrottled) {
      if (leading) {
        lastThis = this;
        lastArgs = arguments;
      }
      return;
    }

    func.apply(this, arguments);
    isThrottled = true;

    setTimeout(function () {
      isThrottled = false;
      if (lastArgs) {
        throttled.apply(lastThis, lastArgs);
        lastThis = null;
        lastArgs = null;
      }
    }, ms);
  }

  return throttled;
}

const horIndices = [3, 5, 8, 10, 13];
const progIndices = [0, 5, 7, 14, 18];

const sectionIndices = {
  3: "baudrillard",
  5: "bettyboop",
  8: "slider",
  10: "stages",
  13: "closer",
};

function ArticleContainer({ colorTheme, setColorTheme }) {
  const [counter, setCounter] = useState(0);
  const [progressIdx, setProgressIdx] = useState(0);
  const [horizontalProgressIdx, setHorizontalProgressIdx] = useState(0);
  const [horizontal, setHorizontal] = useState(false);

  // const mouseWheelCb = 
  // (e) => {
  //   const horIndices = [3, 5, 8, 10, 13];

  //   const progIndices = [0, 5, 7, 14, 18];

  //   const pos = Math.sign(e.deltaY);
  //   if (horizontal) {
  //     setHorizontalProgressIdx((prev) => prev + pos);
  //     if (progIndices.includes((horizontalProgressIdx + pos))) {
  //       setHorizontal(false);
  //     }
  //   } else {
  //     if (progressIdx === 0 && pos < 0) return;
  //     setProgressIdx((prev) => prev + pos);
  //     if (horIndices.includes((progressIdx + pos))) {
  //       setHorizontal(true);
  //     }
  //   }
  // };

  useEffect(() => {
    if (horizontal) {
      setHorizontalProgressIdx(counter - progressIdx);
      // if (progIndices.includes((counter - progressIdx))) {
      //   setHorizontal(false);
      // }
    } else {
      if (counter < 0) return;
      setProgressIdx(counter);
      // if (horIndices.includes(counter)) {
      //   setHorizontal(true);
      // }
    }
  }, [counter, progressIdx])

  console.log(counter, horizontal)

  const mouseWheelCb = 
  (e) => {
    const pos = Math.sign(e.deltaY);
    setCounter((prev) => prev + pos);
  };

  const wheelListener = useMemo(() => throttle(mouseWheelCb, 2000), []);

  useEffect(() => {

    window.addEventListener("wheel", wheelListener);
    return () => {
      window.removeEventListener("wheel", wheelListener);
    };
  }, [wheelListener]);

  return (
    <StyledArticleContainer>
      <div className="article_header">
        <div className="title">
          simulacra {counter} / {progressIdx} / {horizontalProgressIdx}
          <StyledArticleProgressBar progressIdx={progressIdx} />
        </div>
      </div>
      <WikiLogo outer={true} progressIdx={progressIdx} />
      <div className="article_body">
        <Content
          progressIdx={progressIdx}
          horizontalProgressIdx={horizontalProgressIdx}
          colorTheme={colorTheme}
          setColorTheme={setColorTheme}
        />
      </div>
    </StyledArticleContainer>
  );
}

export default ArticleContainer;

// const [сurrentSection, setCurrentSection] = useState("wiki_article");

// const mouseWheelCb = useCallback(
//   (e) => {
//     const horIndices = [3, 5, 8, 10, 13];

//     const progIndices = [0, 5, 7, 14, 18];

//     const pos = Math.sign(e.deltaY);
//     if (horizontal) {
//       setHorizontalProgressIdx((prev) => prev + pos);
//       if (progIndices.includes((horizontalProgressIdx + pos))) {
//         setHorizontal(false);
//       }
//     } else {
//       if (progressIdx === 0 && pos < 0) return;
//       setProgressIdx((prev) => prev + pos);
//       if (horIndices.includes((progressIdx + pos))) {
//         setHorizontal(true);
//       }
//     }
//   },
//   [horizontal, progressIdx, horizontalProgressIdx]
// );

// useEffect(() => {
//   if (progIndices.includes(progressIdx)) {
//     setHorizontal(true);
//     if (horIndices.includes(horizontalProgressIdx)) {
//       setHorizontal(false);
//     }
//   }
// }, [progressIdx, horizontalProgressIdx]);

// useEffect(() => {
//   const mouseWheelCb = (e) => {
//     const pos = Math.sign(e.deltaY);
//     setProgressIdx((prev) => prev + pos);
//   };

//   const mouseWheelCb2 = (e) => {
//     const pos = Math.sign(e.deltaY);
//     setHorizontalProgressIdx((prev) => prev + pos);
//   };

//   const verticalListener = throttle(mouseWheelCb, 1000);
//   const horizontalListener = throttle(mouseWheelCb2, 1000);

//   // window.addEventListener("wheel", verticalListener);
//   window.addEventListener("wheel", horizontalListener);

//   if (horizontal) {
//     window.removeEventListener("wheel", verticalListener);
//   } else {
//     window.addEventListener("wheel", verticalListener);
//   }

//   return () => {
//     window.removeEventListener("wheel", horizontalListener);
//     window.removeEventListener("wheel", verticalListener);
//   };
// }, [horizontal]);
