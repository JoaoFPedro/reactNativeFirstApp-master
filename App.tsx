import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";

import React from "react";
import styles from "./AppStyle";
import Footer from "./src/components/footer/footer";
import Header from "./src/components/header";
import PlatformChecklist from "./src/components/PlataformChecklist/PlataformCheckList";
import GameList from "./src/pages/GameList";
import getGames, { Game } from "./src/services/games.Services";

export default function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [platforms, setPlatforms] = useState<string[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
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
    };

    fetchGames();
  }, []);

  const getUniquePlataform = (games: Game[]) => {
    const plataform = games.map((game) => game.plataforma).flat();
    console.log(plataform);
    return [...new Set(plataform)];
  };

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

  // const handleFilterChange = (filterText: string) => {
  //   const lowerCasedFilter = filterText.toLocaleLowerCase();
  //   const filtered = games.filter(
  //     (game) =>
  //       game.nome.toLocaleLowerCase().includes(lowerCasedFilter) &&
  //       (selectedPlatforms.length === 0 ||
  //         selectedPlatforms.includes(game.plataforma))
  //   );
  //   setFilteredGames(filtered);
  // };

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
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Erro: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <Header applyFilter={applyFilter} />
      <PlatformChecklist
        platforms={platforms}
        selectedPlatforms={selectedPlatforms}
        onPlatformChange={handlePlatformChange}
      />
      <GameList games={filteredGames} />
      <Footer />
    </View>
  );
}
