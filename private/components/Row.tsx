import React from 'react';

import decodeParameters from './decodeParameters';

type P = Parameters<typeof decodeParameters>[0];

class Row extends React.Component<P & Omit<JSX.IntrinsicElements['div'], keyof P>> {
  render () {
    const { className, ...props } = decodeParameters(this.props);

    return <div {...props} className={[ 'flex m-x-!2', className, ]} />;
  }
}

export default Row;
