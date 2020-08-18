import { JustifyContentProperty, } from '../../helpers/decodeCommonParameters';
import f from '../f';
import fb from '../fb';

function justifyContent (): string {
  return fb(
    (breakpoint) => f(
      ($) => `.${breakpoint}justify-content-${$} {
  justify-content: ${$} !important;
}`,
      JustifyContentProperty
    )
  );
}

export default justifyContent;
