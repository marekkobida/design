import React from 'react';

import decodeParameters from './decodeParameters';

type P = Parameters<typeof decodeParameters>[0];

class Text extends React.Component<P & Omit<JSX.IntrinsicElements['p'], keyof P>> {
  render () {
    const { className, ...props } = decodeParameters(this.props);

    return <p {...props} className={className} />;
  }
}

export default Text;
