import { AppData } from "../../../enums";

interface ComponentPropTypes {
  id: number;
  appDataType: AppData;
  label: string;
  isHighlighted: boolean;
  isLocked: boolean;
  isHidden: boolean;
  tag: string;
};

export {
  ComponentPropTypes,
};
