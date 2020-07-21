import React from 'react';

import decodeResponsiveClassName, { EncodedResponsiveClassName, } from '../helpers/decodeResponsiveClassName';

import DesignComponent from './DesignComponent';

interface P {
  columnOffset?: EncodedResponsiveClassName<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11>;
  columnSize?: EncodedResponsiveClassName<'#' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'width'>;
}

class Column extends DesignComponent<React.ComponentPropsWithoutRef<'div'> & P> {
  static defaultProps: Column['props'] = { pX: 2, };

  render () {
    const { className, columnOffset, columnSize, ...notCommonParameters } = this.decodedCommonParameters;

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
