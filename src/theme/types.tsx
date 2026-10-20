interface ColorTypes {
  appBackground: string;
  white: string;
  black: string;
  disabled: string;
  transparent: string;
  primary: ColorVariantTypes;
  blue: ColorVariantTypes;
  green: ColorVariantTypes;
  yellow: ColorVariantTypes;
  red: ColorVariantTypes;
  purple: ColorVariantTypes;
  pink: ColorVariantTypes;
  neutral: ColorVariantTypes;
};

interface ColorVariantTypes {
  default: string;
  hover: string;
};

interface FontTypes {
  fontFamily: string;
  fontSizes: FontSizeTypes;
};

interface FontSizeTypes {
  title: string;
  large: string;
  normal: string;
  small: string;
  default: string;
};

interface SpacingTypes {
  none: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  default: string;

};

interface ThemeTypes {
  spacing: SpacingTypes;
  font: FontTypes;
  colors: ColorTypes;
};

export type {
  ColorTypes,
  ColorVariantTypes,
  FontTypes,
  FontSizeTypes,
  SpacingTypes,
  ThemeTypes
};