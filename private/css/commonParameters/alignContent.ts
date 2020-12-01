/*
 * Copyright 2020 Marek Kobida
 */

import { AlignContentProperty } from '../../helpers/decodeCommonParameters';
import f from '../f';
import fb from '../fb';

function alignContent(): string {
  return fb(breakpoint =>
    f(
      $ =>
        `.${breakpoint.name}align-content-${$} {\n  align-content: ${$} !important;\n}`,
      AlignContentProperty
    )
  );
}

export default alignContent;
