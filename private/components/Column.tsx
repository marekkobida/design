import decodeResponsiveClassName, { EncodedResponsiveClassName, } from '@redredsk/helpers/private/decodeResponsiveClassName';
import React from 'react';

import decodeParameters from './decodeParameters';

type P = Parameters<typeof decodeParameters>[0] & {
  columnOffset?: EncodedResponsiveClassName<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11>;
  columnSize?: EncodedResponsiveClassName<'#' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'width'>;
};

class Column extends React.Component<P & Omit<JSX.IntrinsicElements['div'], keyof P>> {
  render () {
    const { className, columnOffset, columnSize, ...props } = decodeParameters(this.props);

    return (
      <div
        {...props}
        className={[
          'column',
          decodeResponsiveClassName('column_offset_', columnOffset),
          decodeResponsiveClassName('column_size_', columnSize),
          'p-x-2',
          className,
        ]}
      />
    );
  }
}

export default Column;
