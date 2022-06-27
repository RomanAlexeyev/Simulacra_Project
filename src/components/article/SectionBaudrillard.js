import { StyledSection } from "../styled/article/ArticleContainer.styled";

import jeanPortrait from "./images/jean_baudrillard.png";

function SectionBaudrillard({ prog, hor }) {
  const renderScrollElements = (type) => {
    const elements = {
      portraits: [],
      spans: [],
    };
    for (let i = 1; i < 6; i++) {
      elements.portraits.push(
        <>
          {hor >= i && (
            <img
              src={jeanPortrait}
              className="portrait_scroll"
              id={"portrait_" + i}
              alt="jean baudrillard portrait"
            />
          )}
        </>
      );
      elements.spans.push(<>{hor >= i  && <b> of a copy</b>}</>);
    }
    return elements[type];
  };

  return (
    <StyledSection
      id="baudrillard"
      // additionalDelay={0}
      // leaving={progressIdx > 7}
      // onAnimationEnd={(e) => unmountSection(e.target.id)}
    >
      <div className="text_image">
        <div className="image">
          <div className="image_container">
            <div id="backstrip"></div>
            <img
              src={jeanPortrait}
              id="portrait_main"
              alt="jean baudrillard portrait"
            />
            {renderScrollElements("portraits")}
          </div>
        </div>
        <div className="text">
          <p>
            In the book <b>Simulacra and Simulation</b> (1981/1995), the French
            social theorist Jean Baudrillard gave the term a specific meaning in
            the context of semiotics, extended from its common one:
          </p>
          <p className="scrollCopies">
            <b>a copy</b>
            {renderScrollElements("spans")}
          </p>
          <p>
            which has been so dissipated in its relation to the original that it
            can no longer be said to be a copy.
          </p>
          <p>
            The <b>simulacrum</b>, therefore, stands on its own as a copy
            without a model.
          </p>
        </div>
      </div>
    </StyledSection>
  );
}

export default SectionBaudrillard;
