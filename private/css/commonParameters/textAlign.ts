/*
 * Copyright 2020 Marek Kobida
 */

import { TextAlignProperty } from '../../helpers/decodeCommonParameters';
import f from '../f';
import fb from '../fb';

function textAlign(): string {
  return fb(breakpoint =>
    f(
      $ =>
        `.${breakpoint.name}text-align-${$} {\n  text-align: ${$} !important;\n}`,
      TextAlignProperty
    )
  );
}

export default textAlign;
