import { StyledOuterLayout } from "./styled/OuterLayout.styled";
import LaptopContainer from "./LaptopContainer";

function OuterLayout({ zoom }) {
  return (
    <StyledOuterLayout zoom={zoom}>
      <LaptopContainer zoom={zoom} />
    </StyledOuterLayout>
  );
}

export default OuterLayout;
