import React from 'react';
import createResponsiveClassName, { ResponsiveClassName, } from '../helpers/createResponsiveClassName';

interface P {
  offset?: ResponsiveClassName<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11>;
  size?: ResponsiveClassName<'#' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'width'>;
}

class Column extends React.Component<P & Omit<JSX.IntrinsicElements['div'], keyof P>> {
  render () {
    const { className, offset, size, ...props } = this.props;

    return (
      <div
        {...props}
        className={[
          'column',
          createResponsiveClassName('column_offset_', offset),
          createResponsiveClassName('column_size_', size),
          'p-x-2',
          className,
        ]}
      />
    );
  }
}

export default Column;
