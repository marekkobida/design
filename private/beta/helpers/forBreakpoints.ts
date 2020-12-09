/*
 * Copyright 2020 Marek Kobida
 */

import variables from '../../variables';
import { Breakpoint, CSS } from '../types';

function forBreakpoints($: (breakpoint: Breakpoint) => CSS): CSS {
  return variables.breakpoints.reduce(($$, breakpoint) => {
    return {
      ...$$,
      [`@media (min-width: ${breakpoint.size})`]: $(breakpoint),
    };
  }, $({ name: '', size: '' }));
}

export default forBreakpoints;
