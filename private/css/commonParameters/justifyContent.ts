import { JustifyContentProperty, } from '../../helpers/decodeCommonParameters';
import f from '../f';
import fb from '../fb';

function justifyContent (): string {
  return fb(
    (breakpoint) => f(
      ($) => `.${breakpoint}justify-content-${$} {\n  justify-content: ${$} !important;\n}`,
      JustifyContentProperty
    )
  );
}

export default justifyContent;
