import React from 'react';

import decodeCommonParameters from './decodeCommonParameters';

type P = Parameters<typeof decodeCommonParameters>[0];

class Row extends React.Component<P & Omit<JSX.IntrinsicElements['div'], keyof P>> {
  static defaultProps: P = { flexWrap: 'wrap', mX: '!2', };

  render () {
    const { className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return <div {...notCommonParameters} className={[ 'flex', className, ]} />;
  }
}

export default Row;
