import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";
import styles from "./styles";

interface FilterButtonProps {
  applyFilter: (text: string) => void;
}

const ButtonComponent = ({ applyFilter }: FilterButtonProps) => {
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
