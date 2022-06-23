import useWindowDimensions from "../custom_hooks/useWindowDimensions";

import { StyledBacklightsContainer } from "./styled/BacklightsContainer.styled";
import { StyledLogo } from "./styled/Logo.styled";
import { StyledMenuContainer, StyledMenuItem } from "./styled/Menu.styled";

import logoBacklight from "../assets/graphic_elements/backlights/logo_backlight.png";

import menuAboutBacklight from "../assets/graphic_elements/backlights/menu_item_about_backlight.png";
import menuAuthorBacklight from "../assets/graphic_elements/backlights/menu_item_author_backlight.png";
import menuOtherBacklight from "../assets/graphic_elements/backlights/menu_item_other_backlight.png";

const imgStyle = {
  width: "100%",
  height: "100%",
};

const backlights = {
  menu_about: {
    title: "what i am",
    imgSrc: menuAboutBacklight,
    imgId: "menu_about_backlight",
  },
  menu_author: {
    title: "author",
    imgSrc: menuAuthorBacklight,
    imgId: "menu_author_backlight",
  },
  menu_other: {
    title: "other work",
    imgSrc: menuOtherBacklight,
    imgId: "menu_other_backlight",
  },
};

function BacklightsContainer({ zoom, logoIsActive, currentStroke }) {

  const { width } = useWindowDimensions();

  return (
    <StyledBacklightsContainer>
      <StyledLogo logoIsActive={logoIsActive} zoom={zoom} className="backlight">
        <p>simulacra</p>
        <img src={(width > 576 && width < 1200) ? menuAboutBacklight : logoBacklight} style={imgStyle} id="logo_backlight" draggable={false} alt="" />
      </StyledLogo>

      <StyledMenuContainer>
        {Object.keys(backlights).map((item, idx) => {
          return (
            <StyledMenuItem
              id={item}
              isActive={currentStroke === item}
              key={idx}
              visible={true}
              className="backlight"
            >
              <p>{backlights[item].title}</p>
              <img
                src={backlights[item].imgSrc}
                className="menu_item_backlight"
                id={backlights[item].imgId}
                draggable={false}
                alt=""
              />
            </StyledMenuItem>
          );
        })}
      </StyledMenuContainer>
    </StyledBacklightsContainer>
  );
}

export default BacklightsContainer;
