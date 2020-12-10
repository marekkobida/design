/*
 * Copyright 2020 Marek Kobida
 */

import variables from '../variables.json';
import { CSS } from './types';

function root(): CSS {
  return {
    '*, *::after, *::before': { boxSizing: 'border-box' },
    ':root': variables,
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
    '.border': {
      border:
        'var(--border--border-width) solid rgb(var(--border--border-color)) !important',
    },
    '.border-bottom': {
      borderBottom:
        'var(--border--border-width) solid rgb(var(--border--border-color)) !important',
    },
    '.border-left': {
      borderLeft:
        'var(--border--border-width) solid rgb(var(--border--border-color)) !important',
    },
    '.border-radius': { borderRadius: '0.125rem' },
    '.border-right': {
      borderRight:
        'var(--border--border-width) solid rgb(var(--border--border-color)) !important',
    },
    '.border-top': {
      borderTop:
        'var(--border--border-width) solid rgb(var(--border--border-color)) !important',
    },
    '.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6': {
      fontFamily: 'var(--heading--font-family)',
      fontWeight: 'var(--heading--font-weight)',
      lineHeight: 'var(--heading--line-height)',
    },
    '.h1, h1': { fontSize: 'var(--h1--font-size)' },
    '.h2, h2': { fontSize: 'var(--h2--font-size)' },
    '.h3, h3': { fontSize: 'var(--h3--font-size)' },
    '.h4, h4': { fontSize: 'var(--h4--font-size)' },
    '.h5, h5': { fontSize: 'var(--h5--font-size)' },
    '.h6, h6': { fontSize: 'var(--h6--font-size)' },
    a: { color: 'inherit', textDecoration: 'none' },
    'a:focus, a:hover': { textDecoration: 'underline' },
  };
}

export default root;
