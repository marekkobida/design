import React from 'react';

import { EncodedClassName, } from '../helpers/decodeClassName';
import decodeResponsiveClassName, { EncodedResponsiveClassName, } from '../helpers/decodeResponsiveClassName';

interface P {
  alignItems?: EncodedResponsiveClassName<'#' | 'baseline' | 'end' | 'start'>;
  className?: EncodedClassName | EncodedClassName[];
  flexDirection?: EncodedResponsiveClassName<'column' | 'column-reverse' | 'row' | 'row-reverse'>;
  flexWrap?: EncodedResponsiveClassName<'nowrap' | 'wrap' | 'wrap-reverse'>;
  justifyContent?: EncodedResponsiveClassName<'#' | 'baseline' | 'end' | 'start'>;
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
          decodeResponsiveClassName('flex_align-items_', alignItems),
          decodeResponsiveClassName('flex_flex-direction_', flexDirection),
          decodeResponsiveClassName('flex_flex-wrap_', flexWrap),
          decodeResponsiveClassName('flex_justify-content_', justifyContent),
          'm-x-!2',
          className,
        ]}
      />
    );
  }
}

export default Row;
