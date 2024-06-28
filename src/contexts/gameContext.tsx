import { createContext, useCallback, useContext, useEffect, useState } from "react";
import React from "react";
import getGames, { Game } from "../services/games.Services";

interface GameContextType {
  games: Game[] | null;
  applyFilter: (filterText: string) =>string| void
  handlePlatformChange: (filterText: string) =>string| void
  filteredGames: Game []
}

const GameContext = createContext<GameContextType>({
  games: null,
  applyFilter:() => { console.log('applyFilter is called');},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handlePlatformChange : (filterText: string) =>{},
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

  const applyFilter = (filterText: string) => {
    if (filterText === "") {
      setFilteredGames(games);
    } else {
      const lowerCasedFilter = filterText.toLocaleLowerCase();
      const filtered = games.filter((game) =>
        game.nome.toLocaleLowerCase().includes(lowerCasedFilter)
      );

      setFilteredGames(filtered);
    }
  };

  const handlePlatformChange = (platform: string) => {
    const updatedPlatforms = selectedPlatforms.includes(platform)
      ? selectedPlatforms.filter((p) => p !== platform)
      : [...selectedPlatforms, platform];

    setSelectedPlatforms(updatedPlatforms);
    if (!updatedPlatforms.length) {
      setFilteredGames(games);
      return;
    }
    const filtered = filteredGames.filter((game) => {
      const gameWithPlataform = game.plataforma.find((platformItem) => {
        return updatedPlatforms.includes(platformItem);
      });

      return !!gameWithPlataform;
    });

    setFilteredGames(filtered);
  };


  return (
    <GameContext.Provider value={{ applyFilter, filteredGames, games, handlePlatformChange }}>{children}</GameContext.Provider>
  );
};
export { GameContext, GameContextProvider, useGameContext };
