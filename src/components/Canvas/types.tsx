import React from "react";
import { StylesTypes } from "../../types";
import { Stage } from "konva/lib/Stage";
import Konva from "konva";

interface ComponentPropTypes extends
  StylesTypes.MarginPropTypes,
  StylesTypes.PaddingPropTypes {
  canvasSize: number;
  innerRef: React.Ref<Stage>;
  onMouseMove: (e: Konva.KonvaEventObject<MouseEvent>) => void;
  onClick: (e: Konva.KonvaEventObject<MouseEvent>) => void;
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
