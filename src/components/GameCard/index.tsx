import { Image, Text, View } from 'react-native';

import { Game } from '../../services/games.Services';
import styles from './styles';
import React = require('react');

interface GameCardProps {
  game: Game;
}
function GameCard ({game}: GameCardProps) {
    const generateStarRating = (ratingScore: number) => {
        const numStars = Math.floor(ratingScore);
        return "⭐".repeat(numStars);
      };
    
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={{ uri: game.imagem }} />
            <Text style={styles.title}>{game.nome}</Text>
            <Text style={styles.data}>{`Plataforma: ${game.plataforma}`}</Text>

        </View>
    )
}

export default GameCard;