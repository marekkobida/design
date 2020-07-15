import React from 'react';

import decodeCommonParameters from './decodeCommonParameters';

type P = Parameters<typeof decodeCommonParameters>[0];

class Container extends React.Component<P & Omit<JSX.IntrinsicElements['div'], keyof P>> {
  static defaultProps: P = { mX: '#', pX: 2, };

  render () {
    const { className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return <div {...notCommonParameters} className={[ 'container', className, ]} />;
  }
}

export default Container;
