import { TouchableOpacityProps } from "react-native";

export interface AccordionSectionProps extends TouchableOpacityProps {
  title: string;
  children: React.ReactNode;
  width?: number;
}

export const AccordionSection: React.FC<AccordionSectionProps>;
