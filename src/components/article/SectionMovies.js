import { StyledSection } from "../styled/article/ArticleContainer.styled";

function SectionMovies() {
  return (
    <StyledSection id="movies">
      <div className="text">
        <div className="movies_names_container">
          <div className="movie_name" id="replicants">
            <b>The Replicants</b>
          </div>
          <div className="movie_name" id="mrdata">
            <b>Commander Data</b>
          </div>
          <div className="movie_name" id="matrix">
            <b>The Matrix</b>
          </div>
          <div className="movie_name" id="mecha">
            <b>Mecha robots</b>
          </div>
          <div className="movie_name" id="pulpfiction">
            <b>Mysterious suitcase</b>
          </div>
          <div className="movie_name" id="truman">
            <b>The Truman Show</b>
          </div>
          <div className="movie_name" id="samantha">
            <b>Samantha</b>
          </div>
        </div>
      </div>
      <div className="text right">
        <ul>
          <li>
            The Replicants from the movie <b>Blade Runner</b>
          </li>
          <li>
            Commander Data from <b>Star Trek: The Next Generation</b>
          </li>
          <li>
            The Matrix from <b>The Matrix</b>
          </li>
          <li>
            Mecha humanoid robots from <b>A.I. Artificial Intelligence</b>
          </li>
          <li>
            The suitcase, Red Apple cigarettes and other metacinematic elements
            from <b>Pulp Fiction</b>
          </li>
          <li>
            The world of Truman Burbank from <b>The Truman Show</b>
          </li>
          <li>
            Samantha virtual assistant from <b>Her</b>
          </li>
        </ul>
      </div>
    </StyledSection>
  );
}

export default SectionMovies;
