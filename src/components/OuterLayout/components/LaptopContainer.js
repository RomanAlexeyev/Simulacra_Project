import { useDispatch } from "react-redux";
import { setMenuItem, setZoom } from "../../../store/menuSlice";

import { StyledLaptopContainer } from "./styled/Laptop.styled";
import laptopBg from "../../../assets/graphic_elements/laptop_background.png";

import LaptopScreen from "./LaptopScreen";

const imgStyle = {
  width: "100%",
  height: "100%",
  position: "absolute",
  transform: "translate(-50%, -50%)",
  left: "50%",
  top: "50%",
  objectFit: "cover",
};

function LaptopContainer({ zoom }) {

  const dispatch = useDispatch();
  const updateZoom = (zoom) => dispatch(setZoom(zoom));
  const updateMenu = (item) => dispatch(setMenuItem(item));

  const leaveAuthor = () => {
    updateMenu(null);
    updateZoom('in');
  }

  const resetMenu = () => {
    if (zoom === 'in') {
      updateMenu(null);
    }
  }

  return (
    <StyledLaptopContainer zoom={zoom}>
      <img src={laptopBg} style={imgStyle} alt="" />
      <LaptopScreen zoom={zoom} />
      <div className="return_button" onClick={leaveAuthor}>return</div>
    </StyledLaptopContainer>
  );
}

export default LaptopContainer;
