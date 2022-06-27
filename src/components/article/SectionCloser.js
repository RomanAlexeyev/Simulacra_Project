import { StyledSection } from "../styled/article/ArticleContainer.styled";

function SectionCloser({ prog, hor, colorTheme, setColorTheme }) {
  return (
    <StyledSection
      id="closer"
      // additionalDelay={0}
      // leaving={progressIdx > 7}
      // onAnimationEnd={(e) => unmountSection(e.target.id)}
    >
      <div className="text-full centered closer">
        <div className="text">
          <p>A simulacrum can be a copy of anything.</p>
          <p>Even</p>
          <div id="opposite_word" style={{ transform: `translateX(-50%) scale(${(hor-17.5)*2})`, transition: 'transform 0.5s ease'}}><b>the opposite</b></div>
          <div style={{marginTop: '25px'}}>copy of itself</div>
        </div>
      </div>
    </StyledSection>
  );
}

export default SectionCloser;
