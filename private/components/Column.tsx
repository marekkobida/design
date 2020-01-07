import React from 'react';

import createClassName from '../helpers/createClassName';
import createResponsiveClassName, { ResponsiveClassName } from '../helpers/createResponsiveClassName';

import Element from './Element';

interface P {
  offset?: ResponsiveClassName<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11>;
  size?: ResponsiveClassName<'#' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'width'>;
  test?: React.RefObject<HTMLDivElement>;
}

class Column extends React.Component<P & Omit<Element['props'], keyof P>> {
  render() {
    const {
      className, offset, size, test, ...props
    } = this.props;

    const createdClassName = createClassName(
      'column',
      createResponsiveClassName(['column', 'offset', offset]),
      createResponsiveClassName(['column', 'size', size]),
      'p-x-2',
      className,
    );

    return <div {...props} ref={test} className={createdClassName} />;
  }
}

export default Column;
