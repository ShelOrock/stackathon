export interface ElementTypes {
  type:
    | 'room'
    | 'door'
    | 'window'
    | 'floor';
  index?: number;
  xPos?: number;
  yPos?: number;
  zAxis?: number;
  width?: number;
  height?: number;
  label?: string;
  isHighlighted?: boolean;
  isLocked?: boolean;
  isHidden?: boolean;
  isDisabled?: boolean;
  orientation?: 'NS' | 'WE';
  tag?: string;
};
  
export type ElementsType = ElementTypes[];