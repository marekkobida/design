import createClassName, { ClassName, } from '../helpers/createClassName';
import createResponsiveClassName, { ResponsiveClassName, } from '../helpers/createResponsiveClassName';

interface P {
  alignment?: ResponsiveClassName<'#' | 'l' | 'r'>;
  className?: ClassName | ClassName[];
  m?: ResponsiveClassName<'!0' | '!1' | '!2' | '!3' | '!4' | '!5' |'!6' |'!7' |'!8' |'!16' |'#' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 16>;
  mB?: ResponsiveClassName<'!0' | '!1' | '!2' | '!3' | '!4' | '!5' |'!6' |'!7' |'!8' |'!16' |'#' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 16>;
  mL?: ResponsiveClassName<'!0' | '!1' | '!2' | '!3' | '!4' | '!5' |'!6' |'!7' |'!8' |'!16' |'#' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 16>;
  mR?: ResponsiveClassName<'!0' | '!1' | '!2' | '!3' | '!4' | '!5' |'!6' |'!7' |'!8' |'!16' |'#' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 16>;
  mT?: ResponsiveClassName<'!0' | '!1' | '!2' | '!3' | '!4' | '!5' |'!6' |'!7' |'!8' |'!16' |'#' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 16>;
  mX?: ResponsiveClassName<'!0' | '!1' | '!2' | '!3' | '!4' | '!5' |'!6' |'!7' |'!8' |'!16' |'#' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 16>;
  mY?: ResponsiveClassName<'!0' | '!1' | '!2' | '!3' | '!4' | '!5' |'!6' |'!7' |'!8' |'!16' |'#' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 16>;
  p?: ResponsiveClassName<'!0' | '!1' | '!2' | '!3' | '!4' | '!5' |'!6' |'!7' |'!8' |'!16' |'#' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 16>;
  pB?: ResponsiveClassName<'!0' | '!1' | '!2' | '!3' | '!4' | '!5' |'!6' |'!7' |'!8' |'!16' |'#' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 16>;
  pL?: ResponsiveClassName<'!0' | '!1' | '!2' | '!3' | '!4' | '!5' |'!6' |'!7' |'!8' |'!16' |'#' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 16>;
  pR?: ResponsiveClassName<'!0' | '!1' | '!2' | '!3' | '!4' | '!5' |'!6' |'!7' |'!8' |'!16' |'#' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 16>;
  pT?: ResponsiveClassName<'!0' | '!1' | '!2' | '!3' | '!4' | '!5' |'!6' |'!7' |'!8' |'!16' |'#' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 16>;
  pX?: ResponsiveClassName<'!0' | '!1' | '!2' | '!3' | '!4' | '!5' |'!6' |'!7' |'!8' |'!16' |'#' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 16>;
  pY?: ResponsiveClassName<'!0' | '!1' | '!2' | '!3' | '!4' | '!5' |'!6' |'!7' |'!8' |'!16' |'#' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 16>;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
}

function handleTextParameters<Parameters extends P> (parameters: Parameters): { className: ClassName | ClassName[], } & Pick<Parameters, Exclude<keyof Parameters, keyof P>> {
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
    size,
    weight,
    ...$
  } = parameters;

  return {
    className: createClassName([
      size && `h${size}`,
      createResponsiveClassName('m-', m),
      createResponsiveClassName('m-b-', mB),
      createResponsiveClassName('m-l-', mL),
      createResponsiveClassName('m-r-', mR),
      createResponsiveClassName('m-t-', mT),
      createResponsiveClassName('m-x-', mX),
      createResponsiveClassName('m-y-', mY),
      createResponsiveClassName('p-', p),
      createResponsiveClassName('p-b-', pB),
      createResponsiveClassName('p-l-', pL),
      createResponsiveClassName('p-r-', pR),
      createResponsiveClassName('p-t-', pT),
      createResponsiveClassName('p-x-', pX),
      createResponsiveClassName('p-y-', pY),
      createResponsiveClassName('t_alignment_', alignment),
      weight && `t_weight_${weight}`,
      className,
    ]),
    ...$,
  };
}

export default handleTextParameters;
