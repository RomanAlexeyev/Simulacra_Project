import { StyledSection } from "../styled/article/ArticleContainer.styled";

import wikipediaLogo from "./images/wikipedia_logo.png";

import wikiImg1 from "./images/wiki_image_1.png";
import wikiImg2 from "./images/wiki_image_2.png";
import wikiImg3 from "./images/wiki_image_3.png";
import wikiImg4 from "./images/wiki_image_4.png";

import scrollIconMouse from "../../assets/graphic_elements/scroll_icon/scroll_icon_mouse.svg";
import scrollIconArrow from "../../assets/graphic_elements/scroll_icon/scroll_icon_arrow.svg";

const wikiImages = [wikiImg1, wikiImg2, wikiImg3, wikiImg4];

function SectionWiki() {
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

  const renderWikiImages = () => {
    return wikiImages.map((img, idx) => {
      return (
        <div className="image_box" key={idx} id={"image_box_" + (idx + 1)}>
          <img
            src={img}
            id={"hl_" + (idx + 1)}
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              margin: "0 auto",
            }}
            alt=""
          />
          <div className="img_mask"></div>
        </div>
      );
    });
  };

  // const unmountSection = (id) => {
  //   if (id === "wiki_article") {
  //     setProgressIdx((prev) => prev + 1);
  //   }
  // };

  return (
    <StyledSection
      id="wiki_article"
      // additionalDelay={1.5}
      // leaving={progressIdx > 2}
      // onAnimationEnd={(e) => unmountSection(e.target.id)}
    >
      <div className="text">
        <div id="wikipedia_logo">
          <img
            src={wikipediaLogo}
            alt="wikipedia logo"
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
            }}
          />
        </div>
        <h3>
          A <b>simulacrum</b> (plural: <b>simulacra</b> or <b>simulacrums</b>,
          from Latin "simulacrum", which means "likeness, semblance") is a
          representation or imitation of a person or thing.
        </h3>
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
          Other art forms that play with simulacra include{" "}
          <span className="highlighted" id="hl_1">
            trompe-l'œil
          </span>
          ,{" "}
          <span className="highlighted" id="hl_2">
            pop art
          </span>
          ,{" "}
          <span className="highlighted" id="hl_3">
            Italian neorealism
          </span>
          , and{" "}
          <span className="highlighted" id="hl_4">
            French New Wave
          </span>
          .
        </p>
      </div>
      <div className="illustration">
        <div className="wiki_images_container">{renderWikiImages()}</div>
      </div>
    </StyledSection>
  );
}

export default SectionWiki;
