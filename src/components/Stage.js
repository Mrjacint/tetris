import { StyledStage } from "./styles/StyledStage";

import Cell from "./Cell";

const Stage = ({ stage }) => {
  return (
    <StyledStage width={stage[0].length} heigth={stage.length}>
      {stage.map((row) =>
        row.map((cell, i) => <Cell key={i} type={cell[0]} />)
      )}
    </StyledStage>
  );
};

export default Stage;
