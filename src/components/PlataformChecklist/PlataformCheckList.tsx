import Checkbox from "expo-checkbox";
import React from "react";
import { FlatList, Text, View } from "react-native";
import styles from "./styles";
import { useGameContext } from "../../contexts/gameContext";

interface PlatformChecklistProps {
  platforms: string[];
  selectedPlatforms: string[];
 
}

const PlatformChecklist: React.FC<PlatformChecklistProps> = ({
  platforms,
  selectedPlatforms,
 
}) => {
  const { handlePlatformChange} = useGameContext();

  // const togglePlatform = (platform: string) => {
  //   onPlatformChange(platform);
  // };


  return (
    <FlatList
      data={platforms}
      renderItem={({ item, index }) => (
        <View style={styles.itemContainer} key={`${index}`}>
          <Checkbox
            value={selectedPlatforms.includes(item)}
            onValueChange={() => handlePlatformChange(item)}
          />
          <Text style={styles.itemText}>{item}</Text>
        </View>
      )}
      keyExtractor={(item, index) => `${item}-${index}`}
      contentContainerStyle={styles.container}
    />
  );
};

export default PlatformChecklist;
