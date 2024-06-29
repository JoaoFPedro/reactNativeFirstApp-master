import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";
import styles from "./styles";
import { useGameContext } from "../../contexts/gameContext";


const ButtonComponent = () => {
  const {applyFilter} = useGameContext();
  const [input, setInput] = useState("");

  const handleApplyFilter = () => {
    applyFilter(input);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Filtre por nome"
        value={input}
        onChangeText={(value) => setInput(value)}
      />
      <Button title="Filter" onPress={handleApplyFilter} />
    </View>
  );
};

export default ButtonComponent;
