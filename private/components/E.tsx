import React from 'react';

import decodeSharedParameters from './decodeSharedParameters';
import decodeTextParameters from './decodeTextParameters';

type P = Parameters<typeof decodeSharedParameters>[0] & Parameters<typeof decodeTextParameters>[0];

class E extends React.Component<P & Omit<JSX.IntrinsicElements['div'], keyof P>> {
  render () {
    const { className: L, ...l } = decodeSharedParameters(this.props);
    const { className: R, ...r } = decodeTextParameters(l);

    return <div {...r} className={[ L, R, ]} />;
  }
}

export default E;
