import React from 'react';

import createClassName, { ClassName, } from '../helpers/createClassName';
import createResponsiveClassName, { ResponsiveClassName, } from '../helpers/createResponsiveClassName';

interface P {
  alignItems?: ResponsiveClassName<'#' | 'baseline' | 'end' | 'start'>;
  className?: ClassName | ClassName[];
  flexDirection?: ResponsiveClassName<'column' | 'column-reverse' | 'row' | 'row-reverse'>;
  flexWrap?: ResponsiveClassName<'nowrap' | 'wrap' | 'wrap-reverse'>;
  justifyContent?: ResponsiveClassName<'#' | 'baseline' | 'end' | 'start'>;
}

class Row extends React.Component<P> {
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

    return <div {...props} className={createdClassName} />;
  }
}

export default Row;
