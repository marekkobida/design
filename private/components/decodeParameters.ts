import { EncodedClassName, } from '@redredsk/helpers/private/decodeClassName';
import decodeResponsiveClassName, { EncodedResponsiveClassName, } from '@redredsk/helpers/private/decodeResponsiveClassName';

type T = '!0' | '!1' | '!2' | '!3' | '!4' | '!5' |'!6' |'!7' |'!8' |'!16' |'#' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 16;

type P = {
  alignment?: EncodedResponsiveClassName<'#' | 'l' | 'r'>;
  className?: EncodedClassName | EncodedClassName[];
  m?: EncodedResponsiveClassName<T>;
  mB?: EncodedResponsiveClassName<T>;
  mL?: EncodedResponsiveClassName<T>;
  mR?: EncodedResponsiveClassName<T>;
  mT?: EncodedResponsiveClassName<T>;
  mX?: EncodedResponsiveClassName<T>;
  mY?: EncodedResponsiveClassName<T>;
  p?: EncodedResponsiveClassName<T>;
  pB?: EncodedResponsiveClassName<T>;
  pL?: EncodedResponsiveClassName<T>;
  pR?: EncodedResponsiveClassName<T>;
  pT?: EncodedResponsiveClassName<T>;
  pX?: EncodedResponsiveClassName<T>;
  pY?: EncodedResponsiveClassName<T>;
  textSize?: 1 | 2 | 3 | 4 | 5 | 6;
  textWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
};

function decodeParameters<Parameters extends P> (parameters: Parameters): { className: EncodedClassName[]; } & Pick<Parameters, Exclude<keyof Parameters, keyof P>> {
  const {
    alignment,
    className,
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
    textSize,
    textWeight,
    ...$
  } = parameters;

  return {
    className: [
      textSize && `h${textSize}`,
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
      decodeResponsiveClassName('t_alignment_', alignment),
      textWeight && `t_weight_${textWeight}`,
      className,
    ],
    ...$,
  };
}

export default decodeParameters;
