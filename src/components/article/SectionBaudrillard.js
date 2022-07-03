import { useRef } from "react";
import { useParallax, useIntersectionObserver } from "../../custom_hooks";
import { StyledSection } from "../styled/article/ArticleContainer.styled";

import jeanPortrait from "./images/jean_baudrillard.png";
import lightSpot from "./images/lightspot.png";

function SectionBaudrillard() {

  const targetRef = useRef(null);
  const isVisible = useIntersectionObserver(
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    },
    targetRef
  );

  const questionRef = useRef(null);
  const isQuestionVisible = useIntersectionObserver(
    {
      root: null,
      rootMargin: "0% 0% -40% 0%",
      threshold: 0.1,
    },
    questionRef
  );

  const parallaxIndex = useParallax(isVisible);

  return (
    <StyledSection id="baudrillard" ref={targetRef}>
      <div className="text left">
        <div className={`divider ${isVisible ? 'is_visible' : ''}`}></div>
        <p>
          In the book <b>Simulacra and Simulation</b> (1981/1995), the French
          social theorist Jean Baudrillard gave the term a specific meaning in
          the context of semiotics, extended from its common one:
        </p>
        <p>
          <b>a copy of a copy</b> which has been so dissipated in its relation
          to the original that it can no longer be said to be a copy.
        </p>
        <p>
          The <b>simulacrum</b>, therefore, stands on its own as a copy without
          a model.
        </p>
      </div>
      <div className="image baudrillard" style={{ transform: `translateY(${100 - (parallaxIndex*50)}%)` }}>
        <div
        className="image_container baudrillard"
        style={{ transform: `translateX(${100 - (parallaxIndex*50)}%)`, opacity: parallaxIndex / 2 }}
        >
          <img
            src={jeanPortrait}
            id="baudrillard"
            alt="Portrait of Jean Baudrillard"
          />
          <img src={lightSpot} className="lightspot" draggable={false} alt="" />
        </div>
        <div id="just_a_copy"  ref={questionRef}>
          <h1>
            just
            <br />a copy
            <span id="question_mark" className={isQuestionVisible ? 'is_visible' : ''}>?</span>
          </h1>
        </div>
      </div>
    </StyledSection>
  );
}

export default SectionBaudrillard;
