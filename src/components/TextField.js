import { TextInput, StyleSheet } from "react-native";
import { getScreenHeight, getScreenWidth } from "../util/dimensions";
import { inputColour } from "../util/colours";

export const TextField = ({ value, setter, placeholder }) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.input}
      value={value}
      onChangeText={(val) => setter(val)}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: getScreenHeight() * 0.05,
    margin: 12,
    width: getScreenWidth() * 0.8,
    padding: 10,
    borderRadius: 10,
    backgroundColor: inputColour,
  },
});
