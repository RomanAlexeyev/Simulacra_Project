import { React, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import throttle from "../../../helpers/throttle";
import { useWindowDimensions } from "../../../custom_hooks";

import {
  StyledCursorContainer,
  StyledCustomCursor,
} from "./styled/CursorContainer.styled";

import { StyledLogoContainer, StyledLogo } from "./styled/LogoContainer.styled";
import { StyledMenuContainer, StyledMenuItem } from "./styled/Menu.styled";

import logoBacklight from "../../../assets/graphic_elements/backlights/logo_backlight.png";
import menuAboutBacklight from "../../../assets/graphic_elements/backlights/menu_item_about_backlight.png";
import menuAuthorBacklight from "../../../assets/graphic_elements/backlights/menu_item_author_backlight.png";
import menuSourceBacklight from "../../../assets/graphic_elements/backlights/menu_item_other_backlight.png";

import trailOne from "../../../assets/graphic_elements/cursor/cursor_trail_1.png";
import trailTwo from "../../../assets/graphic_elements/cursor/cursor_trail_2.png";
import trailThree from "../../../assets/graphic_elements/cursor/cursor_trail_3.png";
import trailFour from "../../../assets/graphic_elements/cursor/cursor_trail_4.png";
import trailFive from "../../../assets/graphic_elements/cursor/cursor_trail_5.png";
import customCursorMain from "../../../assets/graphic_elements/cursor/cursor_main.png";

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
  menu_source: {
    title: "source code",
    imgSrc: menuSourceBacklight,
    imgId: "menu_source_backlight",
  },
};

const trailPaths = [trailOne, trailTwo, trailThree, trailFour, trailFive];

function CursorContainer({ zoom }) {
  const isTouchDevice = useSelector((state) => state.scroll.isTouchDevice);
  const UIlistening = useSelector((state) => state.menu.UIlistening);
  const menuItemActive = useSelector((state) => state.menu.menuItemActive);
  const logoIsActive = useSelector((state) => state.menu.logoIsActive);

  const [mouseCoords, setMouseCoords] = useState({ x: "50%", y: "50%" });
  const { aspectRatio } = useWindowDimensions();

  useEffect(() => {
    const mouseMoveCb = (e) => {
      setMouseCoords({
        x: e.pageX + "px",
        y: e.pageY + "px",
      });
    };

    const mouseMoveHadler = throttle(mouseMoveCb, 50, true);

    if (UIlistening) {
      document.addEventListener("mousemove", mouseMoveHadler);
    } else {
      document.removeEventListener("mousemove", mouseMoveHadler);
    }
    return () => document.removeEventListener("mousemove", mouseMoveHadler);
  }, [UIlistening]);

  return (
    <StyledCursorContainer>
      <StyledLogoContainer>
        <StyledLogo isActive={logoIsActive} zoom={zoom} className="backlight">
          <p>simulacra</p>
          <img
            src={
              aspectRatio > 0.8 && aspectRatio < 1.4 ? menuAboutBacklight : logoBacklight
            }
            style={imgStyle}
            id="logo_backlight"
            draggable={false}
            alt=""
          />
        </StyledLogo>
      </StyledLogoContainer>

      <StyledMenuContainer>
        {Object.keys(backlights).map((item, idx) => {
          return (
            <StyledMenuItem
              id={item}
              isActive={menuItemActive === item}
              key={idx}
              visible={true}
              className="backlight"
            >
              <p>
                {backlights[item].title}
                <img
                  src={backlights[item].imgSrc}
                  className="menu_item_backlight"
                  id={backlights[item].imgId}
                  draggable={false}
                  alt=""
                />
              </p>
            </StyledMenuItem>
          );
        })}
      </StyledMenuContainer>
      {!isTouchDevice &&
        trailPaths.map((item, idx) => {
          return (
            <StyledCustomCursor
              key={idx}
              className="trail"
              id={`${`custom_cursor_trail_${idx + 1}`}`}
              style={{
                left: mouseCoords.x,
                top: mouseCoords.y,
              }}
              visible={mouseCoords.x !== "50%"}
            >
              <img src={item} style={imgStyle} draggable={false} alt="" />
            </StyledCustomCursor>
          );
        })}
      {!isTouchDevice && (
        <StyledCustomCursor
          id="custom_cursor_main"
          UIlistening={UIlistening}
          style={{
            left: mouseCoords.x,
            top: mouseCoords.y,
          }}
          visible={mouseCoords.x !== "50%"}
        >
          <img
            src={customCursorMain}
            style={imgStyle}
            draggable={false}
            alt=""
          />
        </StyledCustomCursor>
      )}
    </StyledCursorContainer>
  );
}

export default CursorContainer;
