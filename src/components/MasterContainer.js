import { React, useState, useEffect } from "react";

import {
  StyledMasterContainer,
  StyledVignette,
} from "./styled/MasterContainer.styled";

import { useDispatch, useSelector } from "react-redux";
import { setTouchDevice } from "../store/scrollSlice";

import BacklightsContainer from "./BacklightsContainer";
import CursorContainer from "./CursorContainer";
import GridContainer from "./GridContainer";
import LogoContainer from "./LogoContainer";
import MenuContainer from "./MenuContainer";
import ShardsContainer from "./ShardsContainer";

function MasterContainer({ zoom }) {
  const dispatch = useDispatch();
  const changeDevice = (bool) => dispatch(setTouchDevice(bool));

  const menuItem = useSelector((state) => state.menu.menuItem);

  const [logoIsActive, setLogoIsActive] = useState(null);
  const [currentStroke, setCurrentStroke] = useState(null);
  const [lastStroke, setLastStroke] = useState(null);
  const [uiClickListening, setUiClickListening] = useState(true);
  const [mouseEnterListening, setMouseEnterListening] = useState(true);
  const [mouseMoveListening, setMouseMoveListening] = useState(true);

  console.log(currentStroke, lastStroke, uiClickListening, mouseEnterListening, mouseMoveListening)

  const resetStates = () => {
    setCurrentStroke(null);
    setLastStroke(null);
    setUiClickListening(true);
    setMouseEnterListening(true);
    setMouseMoveListening(true);
  }

  const stopUiListening = () => {
    setUiClickListening(false);
    setMouseEnterListening(false);
    setMouseMoveListening(false);
  };

  useEffect(() => {
    setLogoIsActive(menuItem && menuItem !== "blank");
    if (menuItem === "blank") {
      resetStates();
    }
  }, [menuItem]);

  useEffect(() => {
    const touchListener = () => {
      changeDevice(true);
      window.removeEventListener("touchstart", touchListener);
    };

    window.addEventListener("touchstart", touchListener);
    return () => {
      window.removeEventListener("touchstart", touchListener);
    };
  }, []);

  return (
    <>
      <StyledMasterContainer>
        <BacklightsContainer
          zoom={zoom}
          logoIsActive={logoIsActive}
          currentStroke={currentStroke}
        />
        <CursorContainer zoom={zoom} mouseMoveListening={mouseMoveListening} />
        <GridContainer />
        <StyledVignette />
        <LogoContainer
          zoom={zoom}
          logoIsActive={logoIsActive}
          setLogoIsActive={setLogoIsActive}
          mouseEnterListening={mouseEnterListening}
        />
        <MenuContainer
          zoom={zoom}
          currentStroke={currentStroke}
          setCurrentStroke={setCurrentStroke}
          lastStroke={lastStroke}
          setLastStroke={setLastStroke}
          uiClickListening={uiClickListening}
          mouseEnterListening={mouseEnterListening}
          stopUiListening={stopUiListening}
        />
      </StyledMasterContainer>
      <ShardsContainer
        away={menuItem && menuItem !== "menu_author"}
        awayAndBack={menuItem && menuItem === "menu_author"}
      />
    </>
  );
}

export default MasterContainer;
