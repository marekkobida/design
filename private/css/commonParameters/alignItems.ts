import { AlignItemsProperty, } from '../../helpers/decodeCommonParameters';
import f from '../f';
import fb from '../fb';

function alignItems (): string {
  return fb(
    (breakpoint) => f(
      ($) => `.${breakpoint}align-items-${$} {\n  align-items: ${$} !important;\n}`,
      AlignItemsProperty
    )
  );
}

export default alignItems;
