import { TouchableOpacityProps } from "react-native";

interface PrimaryButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
  size?: "small" | "large";
  textColour?: string;
  backgroundColour?: string;
  borderRadius?: number;
  borderWidth?: number;
  textStyle?: any;
  width?: number | null;
  height?: number | null;
}

export const PrimaryButton: React.FC<PrimaryButtonProps>;
