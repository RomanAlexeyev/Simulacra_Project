import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "../../../../custom_hooks";
import { useDispatch, useSelector } from "react-redux";
import { changeCounter, updateSection } from "../../../../store/scrollSlice";
import { setThemeIsChanging } from "../../../../store/themeSlice";

import { StyledSection } from "./styled/ArticleContainer.styled";

function SectionCloser() {
  const dispatch = useDispatch();
  const stopVertCounter = () => dispatch(changeCounter("horizontal"));
  const setSection = (index) => dispatch(updateSection(index));
  const setIsChanging = (bool) => dispatch(setThemeIsChanging(bool));

  const prog = useSelector((state) => state.scroll.counterX);
  const isTouchDevice = useSelector((state) => state.scroll.isTouchDevice);

  const targetRef = useRef(null);
  const isVisible = useIntersectionObserver(
    {
      root: null,
      rootMargin: "-40%",
      threshold: 0.5,
    },
    targetRef
  );

  useEffect(() => {
    if (isVisible) {
      setSection(6);
      if (isTouchDevice) {
        setIsChanging(true);
      } else {
        stopVertCounter();
      }
    }
  }, [isVisible]);

  useEffect(() => {
    if (prog > 2) {
      setIsChanging(true);
    }
  }, [prog]);

  const oppositeWordTransformStyle = () => {
    return {
      transform: `translate(-50%, -50%) scale(${0.5 * (prog)})`,
      opacity: `${(prog) / 2}`,
    };
  };

  return (
    <StyledSection id="closer" className="centered">
      <div className="text">
        <div className="opposite_words_container">
          <div
            className="opposite_word"
            id="word_1"
            style={oppositeWordTransformStyle()}
          >
            the opposite
          </div>
          <div
            className="opposite_word"
            id="word_2"
            style={oppositeWordTransformStyle()}
          >
            the opposite
          </div>
          <div
            className="opposite_word"
            id="word_3"
            style={oppositeWordTransformStyle()}
          >
            the opposite
          </div>
          <div
            className="opposite_word"
            id="word_4"
            style={oppositeWordTransformStyle()}
          >
            the opposite
          </div>
        </div>
        <div className="closer_line">
          A simulacrum can be a copy of anything.
        </div>
        <div className="closer_line"></div>
        <div className="closer_line">Even</div>
        <div className="closer_line">
          <div
            id="opposite_word"
            style={{
              transform: `translate(-50%, -50%) scale(${
                (prog + 0.5) * (prog + 2)
              })`,
              transition: "transform 0.5s ease",
            }}
            ref={targetRef}
          >
            the opposite
          </div>
        </div>
        <div className="closer_line">copy of itself</div>
      </div>
    </StyledSection>
  );
}

export default SectionCloser;
