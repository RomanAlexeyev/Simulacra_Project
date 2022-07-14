import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "../../../../custom_hooks";
import { useDispatch, useSelector } from "react-redux";
import { changeCounter, updateSection } from "../../../../store/scrollSlice";

import { StyledSection } from "./styled/ArticleContainer.styled";

function SectionCloser() {
  const dispatch = useDispatch();
  const stopVertCounter = () => dispatch(changeCounter("horizontal"));
  const setSection = (index) => dispatch(updateSection(index));

  const prog = useSelector((state) => state.scroll.counterX);

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
      stopVertCounter();
    }
  }, [isVisible]);

  return (
    <StyledSection id="closer" className="centered">
      <div className="text">
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
