import { EncodedClassName, } from './decodeClassName';
import decodeResponsiveClassName, { EncodedResponsiveClassName, } from './decodeResponsiveClassName';

export type AlignItemsProperty =
  | 'baseline'
  | 'normal'
  | 'stretch'
  | SelfPosition;

// https://drafts.csswg.org/css-align-3/#typedef-content-distribution
export type ContentDistribution =
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'stretch';

// https://drafts.csswg.org/css-align-3/#typedef-content-position
export type ContentPosition =
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'start';

export type S = EncodedResponsiveClassName<
  | '!0'
  | '!1'
  | '!16'
  | '!2'
  | '!3'
  | '!4'
  | '!5'
  | '!6'
  | '!7'
  | '!8'
  | '#'
  | 0
  | 1
  | 16
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
>;

// https://drafts.csswg.org/css-align-3/#typedef-self-position
export type SelfPosition =
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'self-end'
  | 'self-start'
  | 'start';

interface CommonParameters {
  alignContent?: EncodedResponsiveClassName<
    | 'baseline'
    | 'normal'
    | ContentDistribution
    | ContentPosition
    >;
  alignItems?: EncodedResponsiveClassName<AlignItemsProperty>;
  alignSelf?: EncodedResponsiveClassName<
    | 'auto'
    | 'baseline'
    | 'normal'
    | 'stretch'
    | SelfPosition
    >;
  className?: EncodedClassName | EncodedClassName[];
  // TODO
  display?: EncodedResponsiveClassName<
    | 'block'
    | 'flex'
    | 'inline'
    | 'inline-block'
    | 'inline-flex'
    | 'none'
  >;
  flexDirection?: EncodedResponsiveClassName<
    | 'column'
    | 'column-reverse'
    | 'row'
    | 'row-reverse'
  >;
  flexWrap?: EncodedResponsiveClassName<
    | 'nowrap'
    | 'wrap'
    | 'wrap-reverse'
  >;
  fontSize?: 1 | 2 | 3 | 4 | 5 | 6;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  justifyContent?: EncodedResponsiveClassName<
    | 'left'
    | 'normal'
    | 'right'
    | ContentDistribution
    | ContentPosition
  >;
  m?: S;
  mB?: S;
  mL?: S;
  mR?: S;
  mT?: S;
  mX?: S;
  mY?: S;
  p?: S;
  pB?: S;
  pL?: S;
  pR?: S;
  pT?: S;
  pX?: S;
  pY?: S;
  textAlign?: EncodedResponsiveClassName<
    | 'center'
    | 'end'
    | 'justify'
    | 'left'
    | 'match-parent'
    | 'right'
    | 'start'
  >;
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
    fontSize,
    fontWeight,
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
      fontSize && `font-size-${fontSize}`,
      fontWeight && `font-weight-${fontWeight}`,
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
