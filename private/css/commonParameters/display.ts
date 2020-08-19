import { DisplayProperty, } from '../../helpers/decodeCommonParameters';
import f from '../f';
import fb from '../fb';

function display (): string {
  return fb(
    (breakpoint) => f(
      ($) => `.${breakpoint.left}display-${$} {\n  display: ${$} !important;\n}`,
      DisplayProperty
    )
  );
}

export default display;
