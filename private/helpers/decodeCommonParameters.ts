import { EncodedClassName, } from './decodeClassName';
import decodeResponsiveClassName, { EncodedResponsiveClassName, } from './decodeResponsiveClassName';

// https://drafts.csswg.org/css-align/#typedef-content-distribution
export const ContentDistribution = [ 'space-around', 'space-between', 'space-evenly', 'stretch', ] as const;

// https://drafts.csswg.org/css-align/#typedef-content-position
export const ContentPosition = [ 'center', 'end', 'flex-end', 'flex-start', 'start', ] as const;

// https://drafts.csswg.org/css-align/#typedef-self-position
export const SelfPosition = [ 'center', 'end', 'flex-end', 'flex-start', 'self-end', 'self-start', 'start', ] as const;

export const AlignContentProperty = [ 'baseline', 'normal', ...ContentDistribution, ...ContentPosition, ] as const;

export const AlignItemsProperty = [ 'baseline', 'normal', 'stretch', ...SelfPosition, ] as const;

export const AlignSelfProperty = [ 'auto', 'baseline', 'normal', 'stretch', ...SelfPosition, ] as const;

// https://drafts.csswg.org/css-display/#typedef-display-box
export const DisplayBox = [ 'none', ];

// https://drafts.csswg.org/css-display/#typedef-display-inside
export const DisplayInside = [ 'flex', 'grid', ];

// https://drafts.csswg.org/css-display/#typedef-display-legacy
export const DisplayLegacy = [ 'inline-block', 'inline-flex', 'inline-grid', ];

// https://drafts.csswg.org/css-display/#typedef-display-outside
export const DisplayOutside = [ 'block', 'inline', ];

export const DisplayProperty = [ ...DisplayBox, ...DisplayInside, ...DisplayLegacy, ...DisplayOutside, ] as const;

export const FlexDirectionProperty = [ 'column', 'column-reverse', 'row', 'row-reverse', ] as const;

export const FlexWrapProperty = [ 'nowrap', 'wrap', 'wrap-reverse', ] as const;

export const JustifyContentProperty = [ 'left', 'normal', 'right', ...ContentDistribution, ...ContentPosition, ] as const;

export const TextAlignProperty = [ 'center', 'end', 'justify', 'left', 'match-parent', 'right', 'start', ] as const;

const $s = [ '!0', '!1', '!16', '!2', '!3', '!4', '!5', '!6', '!7', '!8', 'auto', 0, 1, 16, 2, 3, 4, 5, 6, 7, 8, ] as const;

const $mL = [ '1/12', '10/12', '11/12', '2/12', '3/12', '4/12', '5/12', '6/12', '7/12', '8/12', '9/12', ...$s, ] as const;

const $width = [ '0', '1/12', '10/12', '100', '11/12', '2/12', '3/12', '4/12', '5/12', '6/12', '7/12', '8/12', '9/12', 'auto', ] as const;

export interface CommonParameters {
  alignContent?: EncodedResponsiveClassName<typeof AlignContentProperty[number]>;
  alignItems?: EncodedResponsiveClassName<typeof AlignItemsProperty[number]>;
  alignSelf?: EncodedResponsiveClassName<typeof AlignSelfProperty[number] >;
  className?: EncodedClassName;
  display?: EncodedResponsiveClassName<typeof DisplayProperty[number]>;
  flexDirection?: EncodedResponsiveClassName<typeof FlexDirectionProperty[number]>;
  flexWrap?: EncodedResponsiveClassName<typeof FlexWrapProperty[number]>;
  justifyContent?: EncodedResponsiveClassName<typeof JustifyContentProperty[number]>;
  m?: EncodedResponsiveClassName<typeof $s[number]>;
  mB?: EncodedResponsiveClassName<typeof $s[number]>;
  mL?: EncodedResponsiveClassName<typeof $mL[number]>;
  mR?: EncodedResponsiveClassName<typeof $s[number]>;
  mT?: EncodedResponsiveClassName<typeof $s[number]>;
  mX?: EncodedResponsiveClassName<typeof $s[number]>;
  mY?: EncodedResponsiveClassName<typeof $s[number]>;
  p?: EncodedResponsiveClassName<typeof $s[number]>;
  pB?: EncodedResponsiveClassName<typeof $s[number]>;
  pL?: EncodedResponsiveClassName<typeof $s[number]>;
  pR?: EncodedResponsiveClassName<typeof $s[number]>;
  pT?: EncodedResponsiveClassName<typeof $s[number]>;
  pX?: EncodedResponsiveClassName<typeof $s[number]>;
  pY?: EncodedResponsiveClassName<typeof $s[number]>;
  textAlign?: EncodedResponsiveClassName<typeof TextAlignProperty[number]>;
  width?: EncodedResponsiveClassName<typeof $width[number]>;
}

function decodeCommonParameters<Parameters extends CommonParameters> (parameters: Parameters): { className: EncodedClassName[]; } & Pick<Parameters, Exclude<keyof Parameters, keyof CommonParameters>> {
  const {
    alignContent,
    alignItems,
    alignSelf,
    className,
    display,
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
