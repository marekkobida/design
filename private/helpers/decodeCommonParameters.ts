/*
 * Copyright 2020 Marek Kobida
 */

import decodeResponsiveClassName, {
  EncodedResponsiveClassName,
} from './decodeResponsiveClassName';
import { EncodedClassName } from './decodeClassName';

// https://drafts.csswg.org/css-align/#typedef-content-distribution
export const ContentDistribution = [
  'space-around',
  'space-between',
  'space-evenly',
  'stretch',
] as const;

// https://drafts.csswg.org/css-align/#typedef-content-position
export const ContentPosition = [
  'center',
  'end',
  'flex-end',
  'flex-start',
  'start',
] as const;

// https://drafts.csswg.org/css-align/#propdef-align-content
export const AlignContentProperty = [
  'baseline',
  'normal',
  ...ContentDistribution,
  ...ContentPosition,
] as const;

// https://drafts.csswg.org/css-align/#typedef-self-position
export const SelfPosition = [
  'center',
  'end',
  'flex-end',
  'flex-start',
  'self-end',
  'self-start',
  'start',
] as const;

// https://drafts.csswg.org/css-align/#propdef-align-items
export const AlignItemsProperty = [
  'baseline',
  'normal',
  'stretch',
  ...SelfPosition,
] as const;

// https://drafts.csswg.org/css-align/#propdef-align-self
export const AlignSelfProperty = [
  'auto',
  'baseline',
  'normal',
  'stretch',
  ...SelfPosition,
] as const;

// https://drafts.csswg.org/css-display/#typedef-display-box
export const DisplayBox = ['none'] as const;

// https://drafts.csswg.org/css-display/#typedef-display-inside
export const DisplayInside = ['flex', 'grid'] as const;

// https://drafts.csswg.org/css-display/#typedef-display-legacy
export const DisplayLegacy = [
  'inline-block',
  'inline-flex',
  'inline-grid',
] as const;

// https://drafts.csswg.org/css-display/#typedef-display-outside
export const DisplayOutside = ['block', 'inline'] as const;

export const DisplayProperty = [
  ...DisplayBox,
  ...DisplayInside,
  ...DisplayLegacy,
  ...DisplayOutside,
] as const;

export const FlexDirectionProperty = [
  'column',
  'column-reverse',
  'row',
  'row-reverse',
] as const;

export const FlexProperty = ['none', 1] as const;

export const FlexWrapProperty = ['nowrap', 'wrap', 'wrap-reverse'] as const;

// https://drafts.csswg.org/css-align/#justify-items-property
export const JustifyContentProperty = [
  'left',
  'normal',
  'right',
  ...ContentDistribution,
  ...ContentPosition,
] as const;

export const S = [
  '!1',
  '!2',
  '!3',
  '!4',
  '!5',
  '!6',
  '!7',
  '!8',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  'auto',
] as const;

export const MarginLeftProperty = [
  '1/12',
  '2/12',
  '3/12',
  '4/12',
  '5/12',
  '6/12',
  '7/12',
  '8/12',
  '9/12',
  '10/12',
  '11/12',
  ...S,
] as const;

export const TextAlignProperty = [
  'center',
  'end',
  'justify',
  'left',
  'match-parent',
  'right',
  'start',
] as const;

export const WidthProperty = [
  '0',
  '1/12',
  '2/12',
  '3/12',
  '4/12',
  '5/12',
  '6/12',
  '7/12',
  '8/12',
  '9/12',
  '10/12',
  '11/12',
  '100',
  'auto',
] as const;

export interface CommonParameters {
  alignContent: EncodedResponsiveClassName<typeof AlignContentProperty[number]>;
  alignItems: EncodedResponsiveClassName<typeof AlignItemsProperty[number]>;
  alignSelf: EncodedResponsiveClassName<typeof AlignSelfProperty[number]>;
  className: EncodedClassName;
  display: EncodedResponsiveClassName<typeof DisplayProperty[number]>;
  flex: EncodedResponsiveClassName<typeof FlexProperty[number]>;
  flexDirection: EncodedResponsiveClassName<
    typeof FlexDirectionProperty[number]
  >;
  flexWrap: EncodedResponsiveClassName<typeof FlexWrapProperty[number]>;
  justifyContent: EncodedResponsiveClassName<
    typeof JustifyContentProperty[number]
  >;
  m: EncodedResponsiveClassName<typeof S[number]>;
  mB: EncodedResponsiveClassName<typeof S[number]>;
  mL: EncodedResponsiveClassName<typeof MarginLeftProperty[number]>;
  mR: EncodedResponsiveClassName<typeof S[number]>;
  mT: EncodedResponsiveClassName<typeof S[number]>;
  mX: EncodedResponsiveClassName<typeof S[number]>;
  mY: EncodedResponsiveClassName<typeof S[number]>;
  p: EncodedResponsiveClassName<typeof S[number]>;
  pB: EncodedResponsiveClassName<typeof S[number]>;
  pL: EncodedResponsiveClassName<typeof S[number]>;
  pR: EncodedResponsiveClassName<typeof S[number]>;
  pT: EncodedResponsiveClassName<typeof S[number]>;
  pX: EncodedResponsiveClassName<typeof S[number]>;
  pY: EncodedResponsiveClassName<typeof S[number]>;
  textAlign: EncodedResponsiveClassName<typeof TextAlignProperty[number]>;
  width: EncodedResponsiveClassName<typeof WidthProperty[number]>;
}

function decodeCommonParameters<Parameters extends Partial<CommonParameters>>(
  parameters: Parameters
): Pick<Parameters, Exclude<keyof Parameters, keyof CommonParameters>> & {
  className: EncodedClassName[];
} {
  const {
    alignContent,
    alignItems,
    alignSelf,
    className,
    display,
    flex,
    flexDirection,
    flexWrap,
    justifyContent,
    m,
    mB,
    mL,
    mR,
    mT,
    mX,
    mY,
    p,
    pB,
    pL,
    pR,
    pT,
    pX,
    pY,
    textAlign,
    width,
    ...notCommonParameters
  } = parameters;

  return {
    className: [
      decodeResponsiveClassName('align-content-', alignContent),
      decodeResponsiveClassName('align-items-', alignItems),
      decodeResponsiveClassName('align-self-', alignSelf),
      decodeResponsiveClassName('display-', display),
      decodeResponsiveClassName('flex-', flex),
      decodeResponsiveClassName('flex-direction-', flexDirection),
      decodeResponsiveClassName('flex-wrap-', flexWrap),
      decodeResponsiveClassName('justify-content-', justifyContent),
      decodeResponsiveClassName('m-', m),
      decodeResponsiveClassName('m-b-', mB),
      decodeResponsiveClassName('m-l-', mL),
      decodeResponsiveClassName('m-r-', mR),
      decodeResponsiveClassName('m-t-', mT),
      decodeResponsiveClassName('m-x-', mX),
      decodeResponsiveClassName('m-y-', mY),
      decodeResponsiveClassName('p-', p),
      decodeResponsiveClassName('p-b-', pB),
      decodeResponsiveClassName('p-l-', pL),
      decodeResponsiveClassName('p-r-', pR),
      decodeResponsiveClassName('p-t-', pT),
      decodeResponsiveClassName('p-x-', pX),
      decodeResponsiveClassName('p-y-', pY),
      decodeResponsiveClassName('text-align-', textAlign),
      decodeResponsiveClassName('width-', width),
      className,
    ],
    ...notCommonParameters,
  };
}

export default decodeCommonParameters;
