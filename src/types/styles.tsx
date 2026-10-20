import { Styles } from "../enums";

type StyledPropTypes<ComponentPropTypes> = {
  [ Property in keyof ComponentPropTypes as `$${ string & Property }`]: ComponentPropTypes[Property];
};

interface MarginPropTypes {
  $margin?: Styles.Spacings;
  $mt?: Styles.Spacings;
  $mr?: Styles.Spacings;
  $mb?: Styles.Spacings;
  $ml?: Styles.Spacings;
};

interface PaddingPropTypes {
  $padding?: Styles.Spacings;
  $pt?: Styles.Spacings;
  $pr?: Styles.Spacings;
  $pb?: Styles.Spacings;
  $pl?: Styles.Spacings;
};

export {
  StyledPropTypes,
  MarginPropTypes,
  PaddingPropTypes
};
