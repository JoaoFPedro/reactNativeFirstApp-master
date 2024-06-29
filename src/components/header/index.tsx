import { Text, View } from "react-native";
import ButtonComponent from "../Button/Button";
import styles from "./styles";
import React = require("react");


function Header( ) {

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Top Games</Text>
      <ButtonComponent  />
    </View>
  );
}

export default Header;
