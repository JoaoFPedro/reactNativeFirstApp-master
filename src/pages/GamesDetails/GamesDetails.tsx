import React from "react";
import { useGameContext } from "../../contexts/gameContext";
import { View, Text } from "react-native";
import GameList from "../GameList";
import { GameDetailsScreenRouteProp } from "../../../App";
import { useRoute } from "@react-navigation/native";

const GamesDetails: React.FC = () => {
  const { filteredGames} = useGameContext();
  const route = useRoute<GameDetailsScreenRouteProp>();
  const { gameId } = route.params;
  const { games } = useGameContext();
  const game = games?.find((g) => g.id === gameId);

  if (!game) {
    return (
      <View >
        <Text>Game not found</Text>
      </View>
    );
  }
  return(
    <View>
      <GameList games={[game]}/>
    </View>
  )
};

export default GamesDetails;
