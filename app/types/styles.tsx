type StyledPropTypes<ComponentPropTypes> = {
  [ Property in keyof ComponentPropTypes as `$${ string & Property }`]: ComponentPropTypes[Property];
};

enum SpacingPropTypes {
  none = "none",
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
  default = "default"
};

interface MarginPropTypes {
  margin?: SpacingPropTypes;
  mt?: SpacingPropTypes;
  mr?: SpacingPropTypes;
  mb?: SpacingPropTypes;
  ml?: SpacingPropTypes;
};

interface PaddingPropTypes {
  padding?: SpacingPropTypes;
  pt?: SpacingPropTypes;
  pr?: SpacingPropTypes;
  pb?: SpacingPropTypes;
  pl?: SpacingPropTypes;
};

export {
  StyledPropTypes,
  SpacingPropTypes,
  MarginPropTypes,
  PaddingPropTypes
};
