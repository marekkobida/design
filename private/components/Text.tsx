import React from 'react';

import decodeTextParameters from './decodeTextParameters';

type P = Parameters<typeof decodeTextParameters>[0];

class Text extends React.Component<P & Omit<JSX.IntrinsicElements['p'], keyof P>> {
  render () {
    const { className, ...props } = decodeTextParameters(this.props);

    return <p {...props} className={className} />;
  }
}

export default Text;
