import { StyledOuterLayout } from "./styled/OuterLayout.styled";
import LaptopContainer from "./LaptopContainer";

function OuterLayout({ zoom, menuItem, setMenuItem }) {
  return (
    <StyledOuterLayout zoom={zoom}>
      <LaptopContainer
        zoom={zoom}
        menuItem={menuItem}
        setMenuItem={setMenuItem}
      />
    </StyledOuterLayout>
  );
}

export default OuterLayout;
