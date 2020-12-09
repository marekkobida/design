/*
 * Copyright 2020 Marek Kobida
 */

import { CSS } from './types';

function root(): CSS {
  return {
    '*, *::after, *::before': {
      boxSizing: 'border-box',
    },
    body: {
      backgroundColor: 'rgb(var(--body--background-color))',
      color: 'rgb(var(--body--color))',
      fontFamily: 'var(--body--font-family)',
      fontSize: 'var(--body--font-size)',
      fontWeight: 'var(--body--font-weight)',
      lineHeight: 'var(--body--line-height)',
      margin: '0',
      webkitTextSizeAdjust: '100%',
    },
  };
}

export default root;
