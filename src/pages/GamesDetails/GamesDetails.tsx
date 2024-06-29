import React from "react";
import { useGameContext } from "../../contexts/gameContext";
import { View, Text, Button, TouchableOpacity } from "react-native";
import GameList from "../GameList";
import { GameDetailsScreenRouteProp, RootStackParamList } from "../../../App";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import styles from "./Styles";
import Footer from "../../components/footer/footer";

type NavigationProp = StackNavigationProp<RootStackParamList, "GameDetails">;

const GamesDetails: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const route = useRoute<GameDetailsScreenRouteProp>();
  const { gameId } = route.params;
  const { games } = useGameContext();
  const game = games?.find((g) => g.id === gameId);

  if (!game) {
    return (
      <View>
        <Text>Game not found</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
      <GameList games={[game]} />
      <Footer />
    </View>
  );
};
//Componentes envolvidos na rota: App, GameCard, GameDetails
export default GamesDetails;
