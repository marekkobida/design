import { DisplayProperty, } from '../../helpers/decodeCommonParameters';
import f from '../f';
import fb from '../fb';

function display (): string {
  return fb(
    (breakpoint) => f(
      ($) => `.${breakpoint}display-${$} {
  display: ${$} !important;
}`,
      DisplayProperty
    )
  );
}

export default display;
