export interface WindowTypes {
  index?: number;
  xPos?: number;
  yPos?: number;
  width?: number;
  height?: number;
  label?: string;
  orientation?: 'NS' | 'WE';
  isHighlighted?: boolean;
  isLocked?: boolean;
  isHidden?: boolean;
  floor?: number;
  tag?: string;
};

export type WindowsType = WindowTypes[];