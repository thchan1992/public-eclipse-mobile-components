import { ModalProps } from "react-native";

export interface CustomModalProps extends ModalProps {
  showModal: boolean;
  element: any;
}

export const CustomModal: React.FC<CustomModalProps>;
