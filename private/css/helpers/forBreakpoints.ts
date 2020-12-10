/*
 * Copyright 2020 Marek Kobida
 */

import { Breakpoint, CSS } from '../types';

const breakpoints: Breakpoint[] = [
  { name: '\\#', size: '40rem' },
  { name: '\\#\\#', size: '48rem' },
  { name: '\\#\\#\\#', size: '64rem' },
];

function forBreakpoints($: (breakpoint: Breakpoint) => CSS): CSS {
  return breakpoints.reduce(($$, breakpoint) => {
    return { ...$$, [`@media (min-width: ${breakpoint.size})`]: $(breakpoint) };
  }, $({ name: '', size: '' }));
}

export default forBreakpoints;
