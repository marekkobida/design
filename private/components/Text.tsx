import React from 'react';

import decodeSharedParameters from './decodeSharedParameters';
import decodeTextParameters from './decodeTextParameters';

type P = Parameters<typeof decodeSharedParameters>[0] & Parameters<typeof decodeTextParameters>[0];

class Text extends React.Component<P & Omit<JSX.IntrinsicElements['p'], keyof P>> {
  render () {
    const { className: L, ...l } = decodeSharedParameters(this.props);
    const { className: R, ...r } = decodeTextParameters(l);

    return <p {...r} className={[ L, R, ]} />;
  }
}

export default Text;
