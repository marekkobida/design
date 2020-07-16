import React from 'react';

import decodeCommonParameters from '../helpers/decodeCommonParameters';

type P = Parameters<typeof decodeCommonParameters>[0];

class Label extends React.Component<P & Omit<JSX.IntrinsicElements['label'], keyof P>> {
  render () {
    const { className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return <label {...notCommonParameters} className={className} />;
  }
}

export default Label;
