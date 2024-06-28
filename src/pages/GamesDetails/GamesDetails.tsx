import React from "react";
import { useGameContext } from "../../contexts/gameContext";
import { View } from "react-native";
import GameList from "../GameList";

const GamesDetails: React.FC = () => {
  const { filteredGames} = useGameContext();
  return(
    <View>
      <GameList games={filteredGames}/>
    </View>
  )
};

export default GamesDetails;
