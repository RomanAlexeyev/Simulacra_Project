import { useRef } from "react";
import { useParallax, useIntersectionObserver } from "../../custom_hooks";
import { StyledSection } from "../styled/article/ArticleContainer.styled";

import escapingCriticism from "./images/escaping_criticism.png";
import lightSpot from "./images/lightspot.png";

function SectionWiki() {

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
    <StyledSection id="wiki_section" ref={targetRef}>
      <div className="image wiki">
        <div
          className="image_container wiki"
          style={{ transform: `translateY(${100 - (parallaxIndex*50)}%)` }}
        >
          <img
            src={escapingCriticism}
            id="escaping_criticism"
            alt="Painting called Escaping Criticism by Pere Borrell del Caso"
          />
          <img src={lightSpot} className="lightspot" draggable={false} alt="" />
          <div className="image_title_author">
            <p>
              <b>Escaping Criticism</b>
              <br />
              by Pere Borrell del Caso
            </p>
          </div>
        </div>
      </div>
      <div className="text right">
        <div className={`divider ${isVisible ? 'is_visible' : ''}`}></div>
        <p>
          The word was first recorded in the English language in the late 16th
          century, used to describe a representation, such as a statue or a
          painting, especially of a god. By the late 19th century, it had
          gathered a secondary association of inferiority: an image without the
          substance or qualities of the original.
        </p>
        <p>
          Literary critic Fredric Jameson offers photorealism as an example of
          artistic simulacrum, in which a painting is created by copying a
          photograph that is itself a copy of the real thing.
        </p>
        <p>
          Other art forms that play with simulacra include trompe-l'oeil, pop art, Italian neorealism, and French New Wave.
        </p>
      </div>
    </StyledSection>
  );
}

export default SectionWiki;
