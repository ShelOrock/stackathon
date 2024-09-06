import React from "react";
import { StylesTypes } from "../../types";
import { Stage } from "konva/lib/Stage";

interface ComponentPropTypes extends
  StylesTypes.MarginPropTypes,
  StylesTypes.PaddingPropTypes {
  canvasSize: number;
  innerRef: React.Ref<Stage>;
  onMouseMove: (e: React.MouseEvent<Stage>) => void;
  onClick: (e: React.MouseEvent<Stage>) => void;
  children: React.ReactNode;
};

interface StylingPropTypes extends Omit<ComponentPropTypes,
  | "canvasSize"
  | "innerRef"
  | "onMouseMove"
  | "onClick"
  | "children"
> {};

interface StyledElementPropTypes extends StylesTypes.StyledPropTypes<StylingPropTypes> {};

export {
  ComponentPropTypes,
  StyledElementPropTypes
};
