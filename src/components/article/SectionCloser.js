import { StyledSection } from "../styled/article/ArticleContainer.styled";

function SectionCloser() {
  return (
    <StyledSection id="closer" className="centered">
      <div className="text">
        <div className="closer_line">
          A simulacrum can be a copy of anything.
        </div>
        <div className="closer_line"></div>
        <div className="closer_line">Even</div>
        <div className="closer_line">
          <div
            id="opposite_word"
            // style={{
            //   // transform: `translateX(-50%) scale(${(hor - 17.5) * 2})`,
            //   transition: "transform 0.5s ease",
            // }}
          >
            the opposite
          </div>
        </div>
        <div className="closer_line">copy of itself</div>
      </div>
    </StyledSection>
  );
}

export default SectionCloser;
