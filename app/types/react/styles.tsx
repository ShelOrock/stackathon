type StyledPropTypes<ComponentPropTypes> = {
  [ Property in keyof ComponentPropTypes as `$${ string & Property }`]: ComponentPropTypes[Property];
};

export default StyledPropTypes;
