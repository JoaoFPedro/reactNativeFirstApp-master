import { createContext, useCallback, useContext, useEffect, useState } from "react";
import React from "react";
import getGames, { Game } from "../services/games.Services";

interface GameContextType {
  games: Game[] | null;
  applyFilter: () => void;
  filteredGames: Game []
}

const GameContext = createContext<GameContextType>({
  games: null,
  applyFilter:() => { console.log('applyFilter is called');},
  filteredGames: []
})

const useGameContext = () => {
  return useContext(GameContext);
};

const GameContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
 

  const [games, setGames] = useState<Game[]>([]);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [platforms, setPlatforms] = useState<string[]>([]);

  const getUniquePlataform = useCallback((games: Game[]) => {
    const plataform = games.map((game) => game.plataforma).flat();
    console.log(plataform);
    return [...new Set(plataform)];
  }, []);

  const fetchGames = useCallback(async () => {
    try {
      const data = await getGames();
      setGames(data);
      setFilteredGames(data);
      setPlatforms(getUniquePlataform(data));
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }, [getUniquePlataform]);
  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  const applyFilter =() =>{
    console.log('HELLOU WORLD')
  }
  return (
    <GameContext.Provider value={{ applyFilter, filteredGames, games }}>{children}</GameContext.Provider>
  );
};
export { GameContext, GameContextProvider, useGameContext };
