import { AlignContentProperty, } from '../../helpers/decodeCommonParameters';
import f from '../f';
import fb from '../fb';

function alignContent (): string {
  return fb(
    (breakpoint) => f(
      ($) => `.${breakpoint}align-content-${$} {
  align-content: ${$} !important;
}`,
      AlignContentProperty
    )
  );
}

export default alignContent;
