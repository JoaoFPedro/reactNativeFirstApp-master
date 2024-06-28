import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";

import React from "react";
import GameList from "../../pages/GameList";
import getGames, { Game } from "../../services/games.Services";
import Footer from "../footer/footer";
import Header from "../header";
import PlatformChecklist from "../PlataformChecklist/PlataformCheckList";
import styles from "./styles";
import { useGameContext } from "../../contexts/gameContext";

export default function HomeScreen() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const { filteredGames, platforms, selectedPlatforms} = useGameContext();
  const newFilteredGames = filteredGames


  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Erro: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <Header />
      <PlatformChecklist
        platforms={platforms}
        selectedPlatforms={selectedPlatforms}
        
      />
      <GameList games={newFilteredGames} />

      <Footer />
    </View>
  );
}
