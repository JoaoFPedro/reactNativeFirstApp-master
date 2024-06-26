import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import ButtonComponent from "../Button/Button";
import styles from "./styles";
import React = require("react");

interface HeaderProps {
  applyFilter: (text: string) => void;
  // onFilterChange: (text: string) => void;
}

function Header({ applyFilter }: HeaderProps) {
  const [filter, setFilter] = useState<string>("");
  const [inputFilter, setInputFilter] = useState("");

  const handleFilter = (text: string) => {
    setFilter(text);
  };

  const handleApplyFilter = () => {
    applyFilter(inputFilter);
  };

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Top Games</Text>
      <TextInput
        style={styles.input}
        placeholder="Filtre por nome"
        value={inputFilter}
        onChangeText={(value) => setInputFilter(value)}
      />
      <ButtonComponent handleApplyFilter={handleApplyFilter} />
    </View>
  );
}

export default Header;
