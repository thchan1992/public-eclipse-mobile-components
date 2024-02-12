import { TouchableOpacityProps } from "react-native";

export interface PrimaryButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
  size: "small" | "large";
}

export const PrimaryButton: React.FC<PrimaryButtonProps>;
