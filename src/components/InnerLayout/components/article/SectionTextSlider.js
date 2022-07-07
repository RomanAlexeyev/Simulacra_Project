import { useRef } from "react";
import { useParallax, useIntersectionObserver } from "../../../../custom_hooks";
import { StyledSection } from "./styled/ArticleContainer.styled";

function SectionTextSlider() {

  const targetRef = useRef(null);
  const isVisible = useIntersectionObserver(
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    },
    targetRef
  );

  const parallaxIndex = useParallax(isVisible);

  return (
    <StyledSection id="text-slider" className="centered" ref={targetRef}>
      <div
      className="text_slider"
      style={{ transform: `translateX(${-(parallaxIndex*5+10)}%)` }}
      >
        <h1>a copy of a copy of a copy of a copy of a copy of a copy of a copy</h1>
      </div>
    </StyledSection>
  );
}

export default SectionTextSlider;
