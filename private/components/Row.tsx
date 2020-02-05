import React from 'react';

import createClassName from '../helpers/createClassName';
import createResponsiveClassName, { ResponsiveClassName, } from '../helpers/createResponsiveClassName';

import Element from './Element';

interface P {
  alignItems?: ResponsiveClassName<'#' | 'baseline' | 'end' | 'start'>;
  flexDirection?: ResponsiveClassName<'column' | 'column-reverse' | 'row' | 'row-reverse'>;
  flexWrap?: ResponsiveClassName<'nowrap' | 'wrap' | 'wrap-reverse'>;
  justifyContent?: ResponsiveClassName<'#' | 'baseline' | 'end' | 'start'>;
}

class Row extends React.Component<P & Omit<Element['props'], keyof P>> {
  render () {
    const {
      alignItems, className, flexDirection, flexWrap, justifyContent, ...props
    } = this.props;

    const createdClassName = createClassName(
      'flex flex_flex-wrap_wrap',
      createResponsiveClassName([ 'flex', 'align-items', alignItems, ]),
      createResponsiveClassName([ 'flex', 'flex-direction', flexDirection, ]),
      createResponsiveClassName([ 'flex', 'flex-wrap', flexWrap, ]),
      createResponsiveClassName([ 'flex', 'justify-content', justifyContent, ]),
      'm-x-!2',
      className
    );

    return <Element {...props} className={createdClassName} />;
  }
}

export default Row;
