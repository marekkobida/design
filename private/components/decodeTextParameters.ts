import { EncodedClassName, } from '@redredsk/helpers/private/decodeClassName';
import decodeResponsiveClassName, { EncodedResponsiveClassName, } from '@redredsk/helpers/private/decodeResponsiveClassName';

type P = {
  alignment?: EncodedResponsiveClassName<'#' | 'l' | 'r'>;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
};

function decodeTextParameters<Parameters extends P> (parameters: Parameters): { className: EncodedClassName[]; } & Pick<Parameters, Exclude<keyof Parameters, keyof P>> {
  const { alignment, size, weight, ...$ } = parameters;

  return {
    className: [
      size && `h${size}`,
      decodeResponsiveClassName('t_alignment_', alignment),
      weight && `t_weight_${weight}`,
    ],
    ...$,
  };
}

export default decodeTextParameters;
