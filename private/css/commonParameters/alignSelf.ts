import { AlignSelfProperty, } from '../../helpers/decodeCommonParameters';
import f from '../f';
import fb from '../fb';

function alignSelf (): string {
  return fb(
    (breakpoint) => f(
      ($) => `.${breakpoint}align-self-${$} {
  align-self: ${$} !important;
}`,
      AlignSelfProperty
    )
  );
}

export default alignSelf;
