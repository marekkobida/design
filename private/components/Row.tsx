import React from 'react';

import { ClassName, } from '../helpers/createClassName';
import createResponsiveClassName, { ResponsiveClassName, } from '../helpers/createResponsiveClassName';

interface P {
  alignItems?: ResponsiveClassName<'#' | 'baseline' | 'end' | 'start'>;
  className?: ClassName | ClassName[];
  flexDirection?: ResponsiveClassName<'column' | 'column-reverse' | 'row' | 'row-reverse'>;
  flexWrap?: ResponsiveClassName<'nowrap' | 'wrap' | 'wrap-reverse'>;
  justifyContent?: ResponsiveClassName<'#' | 'baseline' | 'end' | 'start'>;
}

class Row extends React.Component<P & Omit<JSX.IntrinsicElements['div'], keyof P>> {
  render () {
    const { alignItems, className, flexDirection, flexWrap, justifyContent, ...props } = this.props;

    return (
      <div
        {...props}
        className={[
          'flex',
          { 'flex_flex-wrap_wrap': typeof flexWrap === undefined, },
          createResponsiveClassName('flex_align-items_', alignItems),
          createResponsiveClassName('flex_flex-direction_', flexDirection),
          createResponsiveClassName('flex_flex-wrap_', flexWrap),
          createResponsiveClassName('flex_justify-content_', justifyContent),
          'm-x-!2',
          className,
        ]}
      />
    );
  }
}

export default Row;
