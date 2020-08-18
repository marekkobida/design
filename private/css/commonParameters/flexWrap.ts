import { FlexWrapProperty, } from '../../helpers/decodeCommonParameters';
import f from '../f';
import fb from '../fb';

function flexWrap (): string {
  return fb(
    (breakpoint) => f(
      ($) => `.${breakpoint}flex-wrap-${$} {
  flex-wrap: ${$} !important;
}`,
      FlexWrapProperty
    )
  );
}

export default flexWrap;
