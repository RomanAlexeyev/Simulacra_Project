import { StyledSection } from "../styled/article/ArticleContainer.styled";

import jeanPortrait from "./images/jean_baudrillard.png";
import lightSpot from "./images/lightspot.png";

function SectionBaudrillard() {
  return (
    <StyledSection id="baudrillard">
      <div className="text left">
        <div className="divider"></div>
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
      <div className="image baudrillard">
        <div className="image_container baudrillard">
          <img
            src={jeanPortrait}
            id="baudrillard"
            alt="Portrait of Jean Baudrillard"
          />
          <img src={lightSpot} className="lightspot" draggable={false} alt="" />
        </div>
        <div id="just_a_copy">
          <h1>
            just
            <br />a copy<span id="question_mark">?</span>
          </h1>
        </div>
      </div>
    </StyledSection>
  );
}

export default SectionBaudrillard;
