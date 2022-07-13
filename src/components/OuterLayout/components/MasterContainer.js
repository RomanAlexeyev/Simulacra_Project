import { React, useEffect } from "react";

import {
  StyledMasterContainer,
  StyledVignette,
  StyledGridContainer
} from "./styled/MasterContainer.styled";

import { useDispatch, useSelector } from "react-redux";
import { setTouchDevice } from "../../../store/scrollSlice";

import CursorContainer from "./CursorContainer";
import UIContainer from "./UIContainer";
import ShardsContainer from "./ShardsContainer";

function MasterContainer({ zoom }) {
  const dispatch = useDispatch();
  const changeDevice = (bool) => dispatch(setTouchDevice(bool));

  const menuItem = useSelector((state) => state.menu.menuItem);

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
        <CursorContainer zoom={zoom} />
        <StyledGridContainer />
        <StyledVignette />
        <UIContainer zoom={zoom} />
      </StyledMasterContainer>
      <ShardsContainer away={menuItem && menuItem !== "menu_author"} />
    </>
  );
}

export default MasterContainer;
