import decodeResponsiveClassName, { EncodedResponsiveClassName, } from '@redredsk/helpers/private/decodeResponsiveClassName';
import isUndefined from '@redredsk/helpers/private/types/isUndefined';
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
          { 'flex_flex-wrap_wrap': isUndefined(flexWrap), },
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
