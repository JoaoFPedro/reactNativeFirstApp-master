import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';


interface PlatformChecklistProps {
  platforms: string[];
  selectedPlatforms: string[];
  onPlatformChange: (platform: string) => void;
}

const PlatformChecklist: React.FC<PlatformChecklistProps> = ({ platforms, selectedPlatforms, onPlatformChange }) => {
  const togglePlatform = (platform: string) => {
    onPlatformChange(platform);
  };

  return (
    <FlatList
      data={platforms}
      renderItem={({ item }) => (
        <View >
          <Checkbox
            value={selectedPlatforms.includes(item)}
            onValueChange={() => togglePlatform(item)}
          />
          <Text style={styles.itemText} >{item}</Text>
        </View>
      )}
      keyExtractor={item => item}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  itemText: {
    marginLeft: 8,
    fontSize: 16,
    color: "#ffffff"
  },
});

export default PlatformChecklist;
