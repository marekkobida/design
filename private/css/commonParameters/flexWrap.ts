import { FlexWrapProperty, } from '../../helpers/decodeCommonParameters';
import f from '../f';
import fb from '../fb';

function flexWrap (): string {
  return fb(
    (breakpoint) => f(
      ($) => `.${breakpoint.left}flex-wrap-${$} {\n  flex-wrap: ${$} !important;\n}`,
      FlexWrapProperty
    )
  );
}

export default flexWrap;
