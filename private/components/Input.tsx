import React from 'react';

import decodeCommonParameters from '../helpers/decodeCommonParameters';

type P = Parameters<typeof decodeCommonParameters>[0];

class Input extends React.Component<P & Omit<JSX.IntrinsicElements['input'], keyof P>> {
  static defaultProps: P = { pX: 4, pY: 3, };

  render () {
    const { className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return <input {...notCommonParameters} className={className} />;
  }
}

export default Input;
