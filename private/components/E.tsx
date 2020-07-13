import React from 'react';

import decodeParameters from './decodeParameters';

type P = Parameters<typeof decodeParameters>[0];

class E extends React.Component<P & Omit<JSX.IntrinsicElements['div'], keyof P>> {
  render () {
    const { className, ...props } = decodeParameters(this.props);

    return <div {...props} className={className} />;
  }
}

export default E;
