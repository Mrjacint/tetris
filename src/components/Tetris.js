import { useState } from "react";

import { createStage } from "../gameHelpers";

// Styled componenet
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";

// Hooks
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";

// Components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPLayer] = usePlayer();
  const [stage, setStage] = useStage(player, resetPLayer);

  console.log("re-render");

  const movePlayer = (dir) => {
    updatePlayerPos({ x: dir, y: 0 });
  };

  const startGame = () => {
    // Reset everiting
    setStage(createStage());
    resetPLayer();
  };

  const drop = () => {
    updatePlayerPos({ x: 0, y: 1, collided: false });
  };

  const dropPlayer = () => {
    drop();
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        // Check if left arrow pushed down (37 the key code for left arrow)
        movePlayer(-1);
      } else if (keyCode === 39) {
        // Check if right arrow pushed down (39 the key code for right arrow)
        movePlayer(1);
      } else if (keyCode === 40) {
        // Check if down arrow pushed down (40 the key code for down arrow)
        dropPlayer();
      }
    }
  };

  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={(e) => move(e)}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
          )}
          <StartButton callback={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
