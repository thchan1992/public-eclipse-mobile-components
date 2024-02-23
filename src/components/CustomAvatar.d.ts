import { ImageSourcePropType, ViewProps } from "react-native";

export interface CustomAvatarProps extends ViewProps {
  imageSource: ImageSourcePropType;
  badgeCount?: number | string;
  size?: number;
  badgeSize?: number;
}

export const CustomAvatar: React.FC<CustomAvatarProps>;
