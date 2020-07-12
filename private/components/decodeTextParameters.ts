import { EncodedClassName, } from '@redredsk/helpers/private/decodeClassName';
import decodeResponsiveClassName, { EncodedResponsiveClassName, } from '@redredsk/helpers/private/decodeResponsiveClassName';

import decodeSharedParameters from './decodeSharedParameters';

type P = {
  alignment?: EncodedResponsiveClassName<'#' | 'l' | 'r'>;
  className?: EncodedClassName | EncodedClassName[];
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
} & Parameters<typeof decodeSharedParameters>[0];

function decodeTextParameters<Parameters extends P> (parameters: Parameters): Pick<Parameters, Exclude<keyof Parameters, keyof P>> & { className: EncodedClassName | EncodedClassName[]; } {
  const { alignment, className, size, weight, ...$ } = parameters;

  const { test, ...$$ } = decodeSharedParameters($);

  return {
    className: [
      size && `h${size}`,
      decodeResponsiveClassName('t_alignment_', alignment),
      weight && `t_weight_${weight}`,
      className,
      test,
    ],
    ...$$,
  };
}

export default decodeTextParameters;
