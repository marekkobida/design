import React from 'react';

import decodeSharedParameters from './decodeSharedParameters';
import decodeTextParameters from './decodeTextParameters';

type P = Parameters<typeof decodeSharedParameters>[0] & Parameters<typeof decodeTextParameters>[0];

class Heading extends React.Component<P & Omit<JSX.IntrinsicElements['h1'], keyof P>> {
  render () {
    const { className: L, ...l } = decodeSharedParameters(this.props);
    const { className: R, ...r } = decodeTextParameters(l);

    const H = `h${this.props.size}` as 'h1';

    return <H {...r} className={[ L, R, ]} />;
  }
}

export default Heading;
