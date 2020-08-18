import { TextAlignProperty, } from '../../helpers/decodeCommonParameters';
import f from '../f';
import fb from '../fb';

function textAlign (): string {
  return fb(
    (breakpoint) => f(
      ($) => `.${breakpoint}text-align-${$} {
  text-align: ${$} !important;
}`,
      TextAlignProperty
    )
  );
}

export default textAlign;
