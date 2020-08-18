import { FlexDirectionProperty, } from '../../helpers/decodeCommonParameters';
import f from '../f';
import fb from '../fb';

function flexDirection (): string {
  return fb(
    (breakpoint) => f(
      ($) => `.${breakpoint}flex-direction-${$} {
  flex-direction: ${$} !important;
}`,
      FlexDirectionProperty
    )
  );
}

export default flexDirection;
