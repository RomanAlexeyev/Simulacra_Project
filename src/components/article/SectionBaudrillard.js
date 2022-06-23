import { StyledSection } from "../styled/article/ArticleContainer.styled";

function SectionBaudrillard({ progressIdx, setProgressIdx, setListening }) {
  const unmountSection = (id) => {
    if (id === "baudrillard") {
      setProgressIdx((prev) => prev + 1);
    }
  };
  return (
    <StyledSection
      id="baudrillard"
      additionalDelay={0}
      leaving={progressIdx > 7}
      onAnimationEnd={(e) => unmountSection(e.target.id)}
    >
     <div className="textAndImage">
    </div>   
    </StyledSection>
  );
}

export default SectionBaudrillard;
