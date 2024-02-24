import { ModalProps } from "react-native";

export interface CustomWarningProps extends ModalProps {
  visible: boolean;
  message: string;
  onClose: () => void;
  title: string;
  buttonOneTitle?: string;
  buttonTwoTitle?: string;
  buttonTwoOnClick?: () => void;
}

export const CustomWarning: React.FC<CustomWarningProps>;
