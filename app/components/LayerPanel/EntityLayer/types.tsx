import { AppData, Styles } from "../../../enums";

interface ComponentPropTypes {
  appDataType: AppData;
  id: number;
  label: string;
  isHighlighted: boolean;
  isLocked: boolean;
  isHidden: boolean;
  tag: Styles.Colors;
};

export {
  ComponentPropTypes,
};
