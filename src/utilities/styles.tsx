import { css, DefaultTheme } from "styled-components";

type SpacingKey = keyof DefaultTheme["spacing"];

interface MarginPropTypes {
  $margin?: SpacingKey;
  $mt?: SpacingKey;
  $mr?: SpacingKey;
  $mb?: SpacingKey;
  $ml?: SpacingKey;
};

interface PaddingPropTypes {
  $padding?: SpacingKey;
  $pt?: SpacingKey;
  $pr?: SpacingKey;
  $pb?: SpacingKey;
  $pl?: SpacingKey;
}

const NO_SPACING: SpacingKey = "none";

const createMargins = ({
  $margin = NO_SPACING,
  $mt = NO_SPACING,
  $mr = NO_SPACING,
  $mb = NO_SPACING,
  $ml = NO_SPACING,
}: MarginPropTypes) => (
  css`
    ${ ({ theme }) => `
      ${ `margin: ${ theme.spacing[$margin] ?? "" };` }
      ${ `margin-top: ${ theme.spacing[$mt] ?? "" };` }
      ${ `margin-right: ${ theme.spacing[$mr] ?? "" };` }
      ${ `margin-bottom: ${ theme.spacing[$mb] ?? "" };` }
      ${ `margin-left: ${ theme.spacing[$ml] ?? "" };` }
    ` };
  `
);

const createPaddings = ({
  $padding = NO_SPACING,
  $pt = NO_SPACING,
  $pr = NO_SPACING,
  $pb = NO_SPACING,
  $pl = NO_SPACING,
}: PaddingPropTypes) => (
  css`
    ${ ({ theme }) => `
      ${ `padding: ${ theme.spacing[$padding] ?? "" };` }
      ${ `padding-top: ${ theme.spacing[$pt] ?? "" };` }
      ${ `padding-right: ${ theme.spacing[$pr] ?? "" };` }
      ${ `padding-bottom: ${ theme.spacing[$pb] ?? "" };` }
      ${ `padding-left: ${ theme.spacing[$pl] ?? "" };` }
    ` };
  `
);

export {
  createMargins,
  createPaddings
};
