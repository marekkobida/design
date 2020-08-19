import { AlignSelfProperty, } from '../../helpers/decodeCommonParameters';
import f from '../f';
import fb from '../fb';

function alignSelf (): string {
  return fb(
    (breakpoint) => f(
      ($) => `.${breakpoint.left}align-self-${$} {\n  align-self: ${$} !important;\n}`,
      AlignSelfProperty
    )
  );
}

export default alignSelf;
