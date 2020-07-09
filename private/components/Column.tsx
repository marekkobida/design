import { EncodedClassName, } from '@redredsk/helpers/private/decodeClassName';
import decodeResponsiveClassName, { EncodedResponsiveClassName, } from '@redredsk/helpers/private/decodeResponsiveClassName';
import React from 'react';

type P = {
  className?: EncodedClassName | EncodedClassName[];
  offset?: EncodedResponsiveClassName<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11>;
  size?: EncodedResponsiveClassName<'#' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'width'>;
};

class Column extends React.Component<P & Omit<JSX.IntrinsicElements['div'], keyof P>> {
  render () {
    const { className, offset, size, ...props } = this.props;

    return (
      <div
        {...props}
        className={[
          'column',
          decodeResponsiveClassName('column_offset_', offset),
          decodeResponsiveClassName('column_size_', size),
          'p-x-2',
          className,
        ]}
      />
    );
  }
}

export default Column;
