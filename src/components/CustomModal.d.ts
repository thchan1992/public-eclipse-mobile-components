import { ModalProps } from "react-native";

export interface CustomModalProps extends ModalProps {
  showModal: boolean;
  children: React.ReactNode;
  containerStyle?: object;
  contentStyle?: object;
  borderWidth?: number;
  borderRadius?: number;
  borderColor?: string;
}

export const CustomModal: React.FC<CustomModalProps>;
