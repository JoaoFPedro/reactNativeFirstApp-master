import { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import styles from './AppStyle';
import Footer from './src/components/footer/footer';
import Header from './src/components/header';
import GameList from './src/pages/GameList';
import getGames, { Game } from './src/services/games.Services';


export default function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const data = await getGames();
        setGames(data);
        setFilteredGames(data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  const applyFilter =(filterText: string) => {

    if(filterText === ''){
      setFilteredGames(games)
    }
    else {
      const lowerCasedFilter = filterText.toLocaleLowerCase();
      const filtered = games.filter(game => game.nome.toLocaleLowerCase().includes(lowerCasedFilter))
  
      setFilteredGames(filtered);
    }
    }


  const handleFilterChange = (filterText: string) => {
    
    const filtered = games.filter(game => game.nome.toLowerCase().includes(filterText.toLowerCase()));
    setFilteredGames(filtered);
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Erro: {error.message}</Text>;
  }

  return (
    <View style={styles.container} >
      <Header  applyFilter={applyFilter} />
      <GameList games={filteredGames} />
      <Footer />
    </View>
  );
}