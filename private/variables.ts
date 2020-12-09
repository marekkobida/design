/*
 * Copyright 2020 Marek Kobida
 */

import { Breakpoint } from './css/types';

interface Variables {
  ':root': { left: string; right: string }[];
  breakpoints: Breakpoint[];
  sizes: { name: string; size: number }[];
}

const body = [
  {
    left: 'body--background-color',
    right: '255, 255, 255',
  },
  {
    left: 'body--color',
    right: '0, 0, 0',
  },
  {
    left: 'body--font-family',
    right:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
  },
  {
    left: 'body--font-size',
    right: '1rem',
  },
  {
    left: 'body--font-weight',
    right: '400',
  },
  {
    left: 'body--line-height',
    right: '1.5',
  },
];

const border = [
  {
    left: 'border--border-color',
    right: '128, 128, 128',
  },
  {
    left: 'border--border-width',
    right: '0.125rem',
  },
];

const button = [
  {
    left: 'button--background-color',
    right: '128, 128, 128',
  },
  {
    left: 'button--border-color',
    right: 'var(--button--background-color)',
  },
  {
    left: 'button--border-width',
    right: 'var(--border--border-width)',
  },
  {
    left: 'button--color',
    right: '255, 255, 255',
  },
  {
    left: 'button--focus--background-color',
    right: '0, 0, 0',
  },
  {
    left: 'button--focus--border-color',
    right: 'var(--button--focus--background-color)',
  },
  {
    left: 'button--focus--color',
    right: 'var(--button--color)',
  },
];

const heading = [
  {
    left: 'h1--font-size',
    right: '2.75rem',
  },
  {
    left: 'h2--font-size',
    right: '2.25rem',
  },
  {
    left: 'h3--font-size',
    right: '1.75rem',
  },
  {
    left: 'h4--font-size',
    right: '1.5rem',
  },
  {
    left: 'h5--font-size',
    right: '1.25rem',
  },
  {
    left: 'h6--font-size',
    right: '1rem',
  },
  {
    left: 'heading--font-family',
    right: 'var(--body--font-family)',
  },
  {
    left: 'heading--font-weight',
    right: '500',
  },
  {
    left: 'heading--line-height',
    right: '1.25',
  },
];

const input = [
  {
    left: 'input--background-color',
    right: '255, 255, 255',
  },
  {
    left: 'input--border-color',
    right: '128, 128, 128',
  },
  {
    left: 'input--border-width',
    right: 'var(--border--border-width)',
  },
  {
    left: 'input--checked--background-color',
    right: 'var(--input--focus--border-color)',
  },
  {
    left: 'input--checked--border-color',
    right: 'var(--input--focus--border-color)',
  },
  {
    left: 'input--color',
    right: 'var(--body--color)',
  },
  {
    left: 'input--focus--background-color',
    right: 'var(--input--background-color)',
  },
  {
    left: 'input--focus--border-color',
    right: '0, 0, 0',
  },
  {
    left: 'input--focus--color',
    right: 'var(--input--color)',
  },
];

const label = [
  {
    left: 'label--color',
    right: 'var(--body--color)',
  },
];

const select = [
  {
    left: 'select--background-color',
    right: 'var(--input--background-color)',
  },
  {
    left: 'select--border-color',
    right: 'var(--input--border-color)',
  },
  {
    left: 'select--border-width',
    right: 'var(--input--border-width)',
  },
  {
    left: 'select--color',
    right: 'var(--input--color)',
  },
  {
    left: 'select--focus--background-color',
    right: 'var(--input--focus--background-color)',
  },
  {
    left: 'select--focus--border-color',
    right: 'var(--input--focus--border-color)',
  },
  {
    left: 'select--focus--color',
    right: 'var(--input--focus--color)',
  },
];

const variables: Variables = {
  ':root': [
    ...body,
    ...border,
    ...button,
    ...heading,
    ...input,
    ...label,
    ...select,
  ],
  breakpoints: [
    {
      name: '\\#',
      size: '40rem',
    },
    {
      name: '\\#\\#',
      size: '48rem',
    },
    {
      name: '\\#\\#\\#',
      size: '64rem',
    },
  ],
  sizes: [
    {
      name: '0',
      size: 0,
    },
    {
      name: '1',
      size: 0.25,
    },
    {
      name: '2',
      size: 0.5,
    },
    {
      name: '3',
      size: 0.75,
    },
    {
      name: '4',
      size: 1,
    },
    {
      name: '5',
      size: 1.25,
    },
    {
      name: '6',
      size: 1.5,
    },
    {
      name: '7',
      size: 1.75,
    },
    {
      name: '8',
      size: 2,
    },
  ],
};

export default variables;
