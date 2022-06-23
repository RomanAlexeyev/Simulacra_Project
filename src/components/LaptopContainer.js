import { StyledLaptopContainer } from "./styled/Laptop.styled";
import laptopBg from "../assets/graphic_elements/laptop_background.png";

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

function LaptopContainer({ zoom, menuItem, setMenuItem }) {
  return (
    <StyledLaptopContainer zoom={zoom}>
      <img src={laptopBg} style={imgStyle} alt="" />
      <LaptopScreen
        zoom={zoom}
        menuItem={menuItem}
        setMenuItem={setMenuItem}
      />
    </StyledLaptopContainer>
  );
}

export default LaptopContainer;
