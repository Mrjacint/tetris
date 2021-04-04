import { StyledStartButton } from "./styles/StyledStartButton";

const StartButton = ({ callback }) => {
  return <StyledStartButton onClick={callback}>Strat Game</StyledStartButton>;
};

export default StartButton;
