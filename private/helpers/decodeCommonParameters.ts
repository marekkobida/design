import { EncodedClassName, } from './decodeClassName';
import decodeResponsiveClassName, { EncodedResponsiveClassName, } from './decodeResponsiveClassName';

// https://drafts.csswg.org/css-align-3/#typedef-content-distribution
export const ContentDistribution = [ 'space-around', 'space-between', 'space-evenly', 'stretch', ] as const;

// https://drafts.csswg.org/css-align-3/#typedef-content-position
export const ContentPosition = [ 'center', 'end', 'flex-end', 'flex-start', 'start', ] as const;

// https://drafts.csswg.org/css-align-3/#typedef-self-position
export const SelfPosition = [ 'center', 'end', 'flex-end', 'flex-start', 'self-end', 'self-start', 'start', ] as const;

export const AlignContentProperty = [ 'baseline', 'normal', ...ContentDistribution, ...ContentPosition, ] as const;

export const AlignItemsProperty = [ 'baseline', 'normal', 'stretch', ...SelfPosition, ] as const;

export const AlignSelfProperty = [ 'auto', 'baseline', 'normal', 'stretch', ...SelfPosition, ] as const;

export const DisplayProperty = [ 'block', 'flex', 'inline', 'inline-block', 'inline-flex', 'none', ] as const;

export const FlexDirectionProperty = [ 'column', 'column-reverse', 'row', 'row-reverse', ] as const;

export const FlexWrapProperty = [ 'nowrap', 'wrap', 'wrap-reverse', ] as const;

export const JustifyContentProperty = [ 'left', 'normal', 'right', ...ContentDistribution, ...ContentPosition, ] as const;

const S = [ '!0', '!1', '!16', '!2', '!3', '!4', '!5', '!6', '!7', '!8', '#', 0, 1, 16, 2, 3, 4, 5, 6, 7, 8, ] as const;

export const TextAlignProperty = [ 'center', 'end', 'justify', 'left', 'match-parent', 'right', 'start', ] as const;

export interface CommonParameters {
  alignContent?: EncodedResponsiveClassName<typeof AlignContentProperty[number]>;
  alignItems?: EncodedResponsiveClassName<typeof AlignItemsProperty[number]>;
  alignSelf?: EncodedResponsiveClassName<typeof AlignSelfProperty[number] >;
  className?: EncodedClassName;
  display?: EncodedResponsiveClassName<typeof DisplayProperty[number]>;
  flexDirection?: EncodedResponsiveClassName<typeof FlexDirectionProperty[number]>;
  flexWrap?: EncodedResponsiveClassName<typeof FlexWrapProperty[number]>;
  justifyContent?: EncodedResponsiveClassName<typeof JustifyContentProperty[number]>;
  m?: EncodedResponsiveClassName<typeof S[number]>;
  mB?: EncodedResponsiveClassName<typeof S[number]>;
  mL?: EncodedResponsiveClassName<typeof S[number]>;
  mR?: EncodedResponsiveClassName<typeof S[number]>;
  mT?: EncodedResponsiveClassName<typeof S[number]>;
  mX?: EncodedResponsiveClassName<typeof S[number]>;
  mY?: EncodedResponsiveClassName<typeof S[number]>;
  p?: EncodedResponsiveClassName<typeof S[number]>;
  pB?: EncodedResponsiveClassName<typeof S[number]>;
  pL?: EncodedResponsiveClassName<typeof S[number]>;
  pR?: EncodedResponsiveClassName<typeof S[number]>;
  pT?: EncodedResponsiveClassName<typeof S[number]>;
  pX?: EncodedResponsiveClassName<typeof S[number]>;
  pY?: EncodedResponsiveClassName<typeof S[number]>;
  textAlign?: EncodedResponsiveClassName<typeof TextAlignProperty[number]>;
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
      className,
    ],
    ...notCommonParameters,
  };
}

export default decodeCommonParameters;
