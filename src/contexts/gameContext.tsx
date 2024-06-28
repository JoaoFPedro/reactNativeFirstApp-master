import { createContext, useContext, useState } from "react";

const GameContext = createContext({
  games: null,
});

const useGameContext = () => {
  return useContext(GameContext);
};

const GameContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [games, setGames] = useState(null);

  return (
    <GameContext.Provider value={{ games }}>{children}</GameContext.Provider>
  );
};
export { GameContext, GameContextProvider, useGameContext };
