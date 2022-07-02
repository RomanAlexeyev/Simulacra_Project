import { StyledSection } from "../styled/article/ArticleContainer.styled";

import escapingCriticism from "./images/escaping_criticism.png";
import lightSpot from "./images/lightspot.png";

function SectionWiki() {
  return (
    <StyledSection id="wiki_section">
      <div className="image wiki">
        <div className="image_container wiki">
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
        <div className="divider"></div>
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
          Other art forms that play with simulacra include
          <span>trompe-l'oeil</span>,<span>pop art</span>,
          <span>Italian neorealism</span>, and
          <span>French New Wave</span>.
        </p>
      </div>
    </StyledSection>
  );
}

export default SectionWiki;
