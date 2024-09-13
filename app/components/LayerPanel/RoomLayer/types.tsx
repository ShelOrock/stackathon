import { Styles } from "../../../enums";

interface ComponentPropTypes {
  id: number;
  label: string;
  isHidden: boolean;
  isDisabled: boolean;
  isLocked: boolean;
  isHighlighted: boolean;
  activeFloorId: number;
  tag: Styles.Colors;
  handleDeleteRoom: () => void;
};

export {
  ComponentPropTypes,
};
