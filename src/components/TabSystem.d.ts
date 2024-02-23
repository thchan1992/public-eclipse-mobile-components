import { TouchableOpacityProps } from "react-native";

export interface TabSystemProps extends TouchableOpacityProps {
  tabOneTitle: string;
  tabTwoTitle: string;
  tabOneContent: React.ReactNode;
  tabTwoContent: React.ReactNode;
  height?: number;
  width?: number;
}

export const TabSystem: React.FC<TabSystemProps>;
