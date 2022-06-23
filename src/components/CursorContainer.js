import { React, useState, useEffect, useCallback } from "react";
import useThrottle from "../custom_hooks/useThrottle";

import { StyledCustomCursor } from "./styled/CustomCursor.styled";

import trailOne from "../assets/graphic_elements/cursor/cursor_trail_1.png";
import trailTwo from "../assets/graphic_elements/cursor/cursor_trail_2.png";
import trailThree from "../assets/graphic_elements/cursor/cursor_trail_3.png";
import trailFour from "../assets/graphic_elements/cursor/cursor_trail_4.png";
import trailFive from "../assets/graphic_elements/cursor/cursor_trail_5.png";

import customCursorMain from "../assets/graphic_elements/cursor/cursor_main.png";

const imgStyle = {
  width: "100%",
  height: "100%",
};

const trailPaths = [trailOne, trailTwo, trailThree, trailFour, trailFive];

function CursorContainer({ zoom, mouseMoveListening }) {
  
  const [mouseCoords, setMouseCoords] = useState({ x: "50%", y: "50%" });

  const mouseMoveCb = useCallback((e) => {
    setMouseCoords({
      x: e.pageX + "px",
      y: e.pageY + "px"
    });
  }, []);

  const mouseMoveHadler = useThrottle(mouseMoveCb, 50, true);

  useEffect(() => {
    if (mouseMoveListening) {
      document.addEventListener("mousemove", mouseMoveHadler);
    } else {
      document.removeEventListener("mousemove", mouseMoveHadler);
    }
    return () => document.removeEventListener("mousemove", mouseMoveHadler);
  }, [mouseMoveListening, mouseMoveHadler]);

  return (
    <div className="cursor-container">
      {trailPaths.map((item, idx) => {
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
      <StyledCustomCursor
        id="custom_cursor_main"
        mouseMoveListening={mouseMoveListening}
        style={{
          left: mouseCoords.x,
          top: mouseCoords.y,
        }}
        visible={mouseCoords.x !== "50%"}
      >
        <img src={customCursorMain} style={imgStyle} draggable={false} alt="" />
      </StyledCustomCursor>
    </div>
  );
}

export default CursorContainer;
