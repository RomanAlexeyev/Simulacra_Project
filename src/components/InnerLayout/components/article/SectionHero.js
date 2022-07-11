import { StyledSection } from "./styled/ArticleContainer.styled";

import scrollIconMouse from "../../../../assets/graphic_elements/scroll_icon/scroll_icon_mouse.svg";
import scrollIconArrow from "../../../../assets/graphic_elements/scroll_icon/scroll_icon_arrow.svg";

import heroImage from "./images/hero_image.png";
import circleTextWhite from "./images/hero_image_text_circle_white.png";
import lightSpot from "./images/lightspot.png";

import wikiLogo from "./images/wikipedia_logo.png";

function SectionHero({isTouchDevice}) {
  const renderScrollIcon = () => {
    const elements = [];
    elements.push(
      <img
        src={scrollIconMouse}
        id="scroll_icon_mouse"
        style={{ maxWidth: "100%", maxHeight: "100%", marginBottom: "10%" }}
        draggable={false}
        alt=""
        key={"scroll_icon_mouse"}
      />
    );
    for (let i = 0; i < 3; i++) {
      let id = `${`scroll_icon_arrow_${i + 1}`}`;
      elements.push(
        <img
          src={scrollIconArrow}
          className="scroll_icon_arrow"
          id={id}
          style={{
            maxWidth: "45%",
            maxHeight: "100%",
            marginTop: "10%",
          }}
          key={id}
          draggable={false}
          alt=""
        />
      );
    }

    return (
      <div id="scroll_icon_container">
        <div id="scroll_icon">{elements}</div>
      </div>
    );
  };

  return (
    <StyledSection id="hero">
      <div className="hero_title">
        <h1>
          What is
          <br />
          a sim
          <br />
          ula
          <br />
          crum?
        </h1>
      </div>
      <div className="hero_image">
        <img
          src={heroImage}
          id="hero-image-apollo"
          draggable={false}
          alt="Apollo statue"
        />
        <img src={lightSpot} id="lightspot" draggable={false} alt="" />
        <div id="animation-container">
          <img
            src={circleTextWhite}
            id="circle-text"
            draggable={false}
            alt=""
          />
        </div>
        {!isTouchDevice && renderScrollIcon()}
      </div>
      <div className="wiki_article">
        <p>
          A <b>simulacrum</b> (plural: <b>simulacra</b> or <b>simulacrums</b>,
          from Latin <i>simulacrum</i>, which means <i>"likeness, semblance"</i>
          ) is a representation or imitation of a person or thing.
        </p>
        <img src={wikiLogo} id="wiki-logo" alt="Wikipedia logo" />
      </div>
    </StyledSection>
  );
}

export default SectionHero;
