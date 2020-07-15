import React from 'react';

import decodeCommonParameters from '../helpers/decodeCommonParameters';
import decodeResponsiveClassName, { EncodedResponsiveClassName, } from '../helpers/decodeResponsiveClassName';

type P = Parameters<typeof decodeCommonParameters>[0] & {
  columnOffset?: EncodedResponsiveClassName<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11>;
  columnSize?: EncodedResponsiveClassName<'#' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'width'>;
};

class Column extends React.Component<P & Omit<JSX.IntrinsicElements['div'], keyof P>> {
  static defaultProps: P = { pX: 2, };

  render () {
    const { className, columnOffset, columnSize, ...notCommonParameters } = decodeCommonParameters(this.props);

    return (
      <div
        {...notCommonParameters}
        className={[
          'column',
          decodeResponsiveClassName('column_offset_', columnOffset),
          decodeResponsiveClassName('column_size_', columnSize),
          className,
        ]}
      />
    );
  }
}

export default Column;
