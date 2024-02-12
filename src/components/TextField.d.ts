import { TextInputProps } from "react-native";

export interface TextFieldProp extends TextInputProps {
  value: any;
  setter: (val: any) => void;
  placeholder: string;
}

export const TextField: React.FC<TextFieldProp>;
