import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { updateSection } from "../../store/scrollSlice";
import { useIntersectionObserver } from "../../custom_hooks";
import { StyledSection } from "../styled/article/ArticleContainer.styled";

function SectionMovies() {

  const dispatch = useDispatch();
  const setSection = (index) => dispatch(updateSection(index));

  const targetRef = useRef(null);
  const isVisible = useIntersectionObserver(
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    },
    targetRef
  );

  useEffect(() => {
    if (isVisible) {
      setSection(4);
    }
  }, [isVisible]);

  return (
    <StyledSection id="movies" ref={targetRef}>
      <div className="text">
        <div
          className={`movies_names_container ${isVisible ? "is_visible" : ""}`}
        >
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
        <ul className={`movies_list ${isVisible ? "is_visible" : ""}`}>
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
