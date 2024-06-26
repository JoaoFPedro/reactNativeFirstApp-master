import React from "react";
import { Button } from "react-native";

interface FilterButtonProps {
  handleApplyFilter: () => void;
}

const ButtonComponent = ({ handleApplyFilter }: FilterButtonProps) => {
  return <Button title="Filter" onPress={handleApplyFilter} />;
};

export default ButtonComponent;
