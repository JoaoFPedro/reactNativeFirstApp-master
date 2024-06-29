import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { Game } from "../../services/games.Services";
import styles from "./styles";
import { GameDetailsScreenNavigationProp } from "../../../App";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  const navigation = useNavigation<GameDetailsScreenNavigationProp>();

  // const generateStarRating = (ratingScore: number) => {
  //   const numStars = Math.floor(ratingScore);
  //   return "⭐".repeat(numStars);
  // };
  const handlePress = () => {
    // Navegar para a tela de detalhes do jogo com o id do jogo
    navigation.navigate("GameDetails", { gameId: game.id });
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
    >
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{ uri: game.imagem }}
          key={game.id}
        />
        <Text style={styles.title}>{game.nome}</Text>
        <Text style={styles.data}>{`Plataforma: ${game.plataforma}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GameCard;
