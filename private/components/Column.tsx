import React from 'react';

import decodeClassName from '../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../helpers/decodeCommonParameters';
import decodeResponsiveClassName, { EncodedResponsiveClassName, } from '../helpers/decodeResponsiveClassName';

interface P {
  columnOffset?: EncodedResponsiveClassName<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11>;
  columnSize?: EncodedResponsiveClassName<'#' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'width'>;
}

class Column extends React.Component<React.ComponentPropsWithRef<'div'> & P & CommonParameters> {
  render () {
    const { className, columnOffset, columnSize, ...notCommonParameters } = decodeCommonParameters(this.props);

    return (
      <div
        {...notCommonParameters}
        className={decodeClassName([
          'column',
          decodeResponsiveClassName('column_offset_', columnOffset),
          decodeResponsiveClassName('column_size_', columnSize),
          className,
        ])}
      />
    );
  }
}

export default Column;
