import React from "react";
import { Button, View } from "react-native";
import styles from "./styles";

interface FilterButtonProps {
  handleApplyFilter: () => void;
}

const ButtonComponent = ({ handleApplyFilter }: FilterButtonProps) => {
  return (
    <View style={styles.container}>
      {/* <TextInput
        style={styles.input}
        placeholder="Filtre por nome"
        value={inputFilter}
        onChangeText={(value) => setInputFilter(value)}
      /> */}
      <Button title="Filter" onPress={handleApplyFilter} />
    </View>
  );
};

export default ButtonComponent;
