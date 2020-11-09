/*
 * Copyright 2020 Marek Kobida
 */

import { AlignSelfProperty } from '../../helpers/decodeCommonParameters';
import f from '../f';
import fb from '../fb';

function alignSelf(): string {
  return fb(breakpoint =>
    f(
      $ =>
        `.${breakpoint.name}align-self-${$} {\n  align-self: ${$} !important;\n}`,
      AlignSelfProperty,
    ),
  );
}

export default alignSelf;
