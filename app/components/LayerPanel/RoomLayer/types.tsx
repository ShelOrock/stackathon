import { Styles } from "../../../enums";

interface ComponentPropTypes {
  id: number;
  label: string;
  isHidden: boolean;
  isLocked: boolean;
  isHighlighted: boolean;
  tag: Styles.Colors;
};

export {
  ComponentPropTypes,
};
