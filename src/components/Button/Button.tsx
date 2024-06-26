import React from "react";
import { Button, View } from "react-native";
import styles from "./styles";

interface FilterButtonProps {
  handleApplyFilter: () => void;
}

const ButtonComponent = ({ handleApplyFilter }: FilterButtonProps) => {
  return (
    <View style={styles.button}>
      <Button title="Filter" onPress={handleApplyFilter} />
    </View>
  );
};

export default ButtonComponent;
