import styled from "styled-components";
import abstractGrig from '../../assets/graphic_elements/abstract_grid_main.png'

export const StyledGridContainer = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: url(${abstractGrig});
    background-position: center;
    background-size: cover;
    filter: brightness(1.3);
    z-index: 2;
    transition: all 3s ease;
`;