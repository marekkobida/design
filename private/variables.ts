interface Variables {
  ':root':     { left: string; right: string; }[];
  breakpoints: (null | { left: string; right: number; })[];
  sizes:       { left: string; right: number; }[];
}

const variables: Variables = {
  ':root': [
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
      right: 'system-ui, -apple-system, Segoe UI, Helvetica Neue, sans-serif',
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
    {
      left: 'border--border-color',
      right: '128, 128, 128',
    },
    {
      left: 'border--border-width',
      right: '0.125rem',
    },
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
    {
      left: 'label--color',
      right: 'var(--body--color)',
    },
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
  ],
  breakpoints: [
    null,
    {
      left: '\\#',
      right: 36,
    },
    {
      left: '\\#\\#',
      right: 48,
    },
    {
      left: '\\#\\#\\#',
      right: 60,
    },
  ],
  sizes: [
    {
      left: '0',
      right: 0,
    },
    {
      left: '1',
      right: 0.25,
    },
    {
      left: '2',
      right: 0.5,
    },
    {
      left: '3',
      right: 0.75,
    },
    {
      left: '4',
      right: 1,
    },
    {
      left: '5',
      right: 1.25,
    },
    {
      left: '6',
      right: 1.5,
    },
    {
      left: '7',
      right: 1.75,
    },
    {
      left: '8',
      right: 2,
    },
  ],
};

export default variables;
