import { TextInputProps } from "react-native";

export interface TextFieldProp extends TextInputProps {
  value: any;
  setter: (val: any) => void;
  placeholder: string;
  textStyle?: any;
  textSize?: number;
  width?: number;
  height?: number;
  inputColour?: string;
  borderRadius?: number;
  borderWidth?: number;
  backgroundColour?: string;
}

export const TextField: React.FC<TextFieldProp>;
