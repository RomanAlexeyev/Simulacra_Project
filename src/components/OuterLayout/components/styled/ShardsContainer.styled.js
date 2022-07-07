import styled from "styled-components";

export const StyledShardsContainer = styled.div`
  position: absolute;
  z-index: 3;
  width: 110%;
  height: 100%;
  transform: translate(-50%, -50%) scale(2);
  top: 50%;
  left: 50%;
  filter: ${({ theme }) => theme.brightnessModes.shardsBrightness};
  transition: filter 1s ease 0.7s;
  animation: ${({ away, awayAndBack }) =>
    awayAndBack ? "shardsContainerAwayAndBack 2s ease 0.5s forwards" : away ? "shardsContainerAway 1s ease 0.5s forwards" : "shardsContainerBring 1s ease 0.5s forwards"};
`;

export const StyledShard = styled.div`
  position: absolute;
  filter: ${({ theme }) => theme.shadows.shardShadow};
  transition: filter 1s ease 0.7s;
  transition: all 0.7s ease-in-out;

  &#shard_1 {
    width: 7%;
    left: 2%;
    top: 25%;
    animation: floatAnimation_1 5s ease-in-out infinite;
  }
  &#shard_2 {
    width: 4%;
    left: 47%;
    top: 80%;
    animation: floatAnimation_2 5s ease-in-out infinite;
  }
  &#shard_3 {
    width: 4%;
    left: 8%;
    top: 65%;
    transform: rotate(230deg);
    animation: floatAnimation_2 5s ease-in-out infinite;
  }
  &#shard_4 {
    width: 8%;
    left: 38%;
    top: -7%;
    animation: floatAnimation_2 5s ease-in-out infinite;
  }
  &#shard_5 {
    width: 7%;
    left: 65%;
    top: 5%;
    animation: floatAnimation_1 5s ease-in-out infinite;
  }
  &#shard_6 {
    width: 5%;
    left: 15%;
    top: 85%;
    transform: rotate(340deg);
    animation: floatAnimation_1 5s ease-in-out infinite;
  }
  &#shard_7 {
    width: 5%;
    left: 85%;
    top: 40%;
    animation: floatAnimation_2 5s ease-in-out infinite;
  }
  &#shard_8 {
    width: 5%;
    left: 77%;
    top: 85%;
    animation: floatAnimation_1 5s ease-in-out infinite;
  }
`;
