import { AlignContentProperty, } from '../../helpers/decodeCommonParameters';
import f from '../f';
import fb from '../fb';

function alignContent (): string {
  return fb(
    (breakpoint) => f(
      ($) => `.${breakpoint.left}align-content-${$} {\n  align-content: ${$} !important;\n}`,
      AlignContentProperty
    )
  );
}

export default alignContent;
