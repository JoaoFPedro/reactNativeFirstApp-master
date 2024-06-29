import { Text, View } from "react-native";
import ButtonComponent from "../Button/Button";
import styles from "./styles";
import React = require("react");


function Header( ) {
  
  // const handleApplyFilter = () => {
  //   applyFilter(inputFilter);
  // };

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Top Games</Text>
      {/* <TextInput
        style={styles.input}
        placeholder="Filtre por nome"
        value={inputFilter}
        onChangeText={(value) => setInputFilter(value)}
      /> */}
      <ButtonComponent  />
    </View>
  );
}

export default Header;
