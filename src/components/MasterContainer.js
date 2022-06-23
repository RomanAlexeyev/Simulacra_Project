import { React, useState, useEffect } from "react";

import { StyledMasterContainer } from "./styled/MasterContainer.styled";

import BacklightsContainer from "./BacklightsContainer";
import CursorContainer from "./CursorContainer";
import GridContainer from "./GridContainer";
import LogoContainer from "./LogoContainer";
import MenuContainer from "./MenuContainer";
import ShardsContainer from "./ShardsContainer";

function MasterContainer({ zoom, menuItem, setMenuItem }) {
  const [logoIsActive, setLogoIsActive] = useState(null);
  const [currentStroke, setCurrentStroke] = useState(null);
  const [lastStroke, setLastStroke] = useState(null);
  const [uiClickListening, setUiClickListening] = useState(true);
  const [mouseEnterListening, setMouseEnterListening] = useState(true);
  const [mouseMoveListening, setMouseMoveListening] = useState(true);

  useEffect(() => {
    if (menuItem) {
      setLogoIsActive(true);
    }
  }, [menuItem]);

  const stopUiListening = () => {
    setUiClickListening(false);
    setMouseEnterListening(false);
    setMouseMoveListening(false);
  }
  

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
        <div className="vignette"></div>
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
          menuItem={menuItem}
          setMenuItem={setMenuItem}
          uiClickListening={uiClickListening}
          mouseEnterListening={mouseEnterListening}
          stopUiListening={stopUiListening}
        />
      </StyledMasterContainer>
      <ShardsContainer away={menuItem && menuItem !== "menu_author"} awayAndBack={menuItem && menuItem === "menu_author"} />
    </>
  );
}

export default MasterContainer;
