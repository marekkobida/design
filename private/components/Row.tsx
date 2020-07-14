import decodeResponsiveClassName, { EncodedResponsiveClassName, } from '@redredsk/helpers/private/decodeResponsiveClassName';
import React from 'react';

import decodeParameters from './decodeParameters';

type P = Parameters<typeof decodeParameters>[0] & {
  alignItems?: EncodedResponsiveClassName<'#' | 'baseline' | 'end' | 'start'>;
  flexDirection?: EncodedResponsiveClassName<'column' | 'column-reverse' | 'row' | 'row-reverse'>;
  flexWrap?: EncodedResponsiveClassName<'nowrap' | 'wrap' | 'wrap-reverse'>;
  justifyContent?: EncodedResponsiveClassName<'#' | 'baseline' | 'end' | 'start'>;
};

class Row extends React.Component<P & Omit<JSX.IntrinsicElements['div'], keyof P>> {
  render () {
    const { alignItems, className, flexDirection, flexWrap, justifyContent, ...props } = decodeParameters(this.props);

    return (
      <div
        {...props}
        className={[
          'flex',
          decodeResponsiveClassName('align-items_', alignItems),
          decodeResponsiveClassName('flex-direction_', flexDirection),
          flexWrap ? decodeResponsiveClassName('flex-wrap_', flexWrap) : 'flex-wrap_wrap',
          decodeResponsiveClassName('justify-content_', justifyContent),
          'm-x-!2',
          className,
        ]}
      />
    );
  }
}

export default Row;
