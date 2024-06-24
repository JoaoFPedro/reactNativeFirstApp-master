import React from 'react';
import { FlatList } from 'react-native';

import GameCard from '../../components/GameCard';
import { Game } from '../../services/games.Services';

interface GameListProps {
  games: Game[];
}

const GameList = ({ games } :GameListProps) => {
  return (
    <FlatList
      data={games}
      renderItem={({ item }) => <GameCard game={item} />}
      
      
    />
  );
};

export default GameList;
