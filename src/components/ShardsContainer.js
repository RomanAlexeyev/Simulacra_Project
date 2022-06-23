import {
  StyledShardsContainer,
  StyledShard,
} from "./styled/ShardsContainer.styled";

import shardOne from "../assets/graphic_elements/shards/shard_1.svg";
import shardTwo from "../assets/graphic_elements/shards/shard_2.svg";
import shardThree from "../assets/graphic_elements/shards/shard_3.svg";
import shardFour from "../assets/graphic_elements/shards/shard_4.svg";
import shardFive from "../assets/graphic_elements/shards/shard_5.svg";
import shardSix from "../assets/graphic_elements/shards/shard_6.svg";
import shardSeven from "../assets/graphic_elements/shards/shard_7.svg";
import shardEight from "../assets/graphic_elements/shards/shard_8.svg";

const shards = [
  shardOne,
  shardTwo,
  shardThree,
  shardFour,
  shardFive,
  shardSix,
  shardSeven,
  shardEight,
];

const imgStyle = {
  width: "100%",
  height: "100%",
};

function ShardsContainer({ away, awayAndBack }) {
  return (
    <StyledShardsContainer away={away} awayAndBack={awayAndBack}>
      {shards.map((item, idx) => {
        return (
          <StyledShard key={idx} id={`${`shard_${idx + 1}`}`}>
            <img src={item} style={imgStyle} draggable={false} alt="" />
          </StyledShard>
        );
      })}
    </StyledShardsContainer>
  );
}

export default ShardsContainer;
