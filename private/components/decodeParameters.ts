import { EncodedClassName, } from '@redredsk/helpers/private/decodeClassName';
import decodeResponsiveClassName, { EncodedResponsiveClassName, } from '@redredsk/helpers/private/decodeResponsiveClassName';

type S = EncodedResponsiveClassName<'!0' | '!1' | '!2' | '!3' | '!4' | '!5' |'!6' |'!7' |'!8' |'!16' |'#' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 16>;

type P = {
  alignItems?: EncodedResponsiveClassName<'#' | 'baseline' | 'end' | 'start'>;
  className?: EncodedClassName | EncodedClassName[];
  flexDirection?: EncodedResponsiveClassName<'column' | 'column-reverse' | 'row' | 'row-reverse'>;
  flexWrap?: EncodedResponsiveClassName<'nowrap' | 'wrap' | 'wrap-reverse'>;
  justifyContent?: EncodedResponsiveClassName<'#' | 'baseline' | 'end' | 'start'>;
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
  textAlignment?: EncodedResponsiveClassName<'#' | 'l' | 'r'>;
  textSize?: 1 | 2 | 3 | 4 | 5 | 6;
  textWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
};

function decodeParameters<Parameters extends P> (parameters: Parameters): { className: EncodedClassName[]; } & Pick<Parameters, Exclude<keyof Parameters, keyof P>> {
  const {
    alignItems,
    className,
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
    textAlignment,
    textSize,
    textWeight,
    ...$
  } = parameters;

  return {
    className: [
      decodeResponsiveClassName('align-items_', alignItems),
      decodeResponsiveClassName('flex-direction_', flexDirection),
      decodeResponsiveClassName('flex-wrap_', flexWrap),
      decodeResponsiveClassName('justify-content_', justifyContent),
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
      decodeResponsiveClassName('text_alignment_', textAlignment),
      textSize && `text_size_${textSize}`,
      textWeight && `text_weight_${textWeight}`,
      className,
    ],
    ...$,
  };
}

export default decodeParameters;
