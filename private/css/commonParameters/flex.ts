import { FlexProperty, } from '../../helpers/decodeCommonParameters';
import f from '../f';
import fb from '../fb';

function flex (): string {
  return fb(
    (breakpoint) => f(
      ($) => `.${breakpoint}flex-${$} {\n  flex: ${$} !important;\n}`,
      FlexProperty
    )
  );
}

export default flex;
