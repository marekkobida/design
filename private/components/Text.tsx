import React from 'react';

import decodeCommonParameters from '../helpers/decodeCommonParameters';

type P = Parameters<typeof decodeCommonParameters>[0];

class Text extends React.Component<P & Omit<JSX.IntrinsicElements['p'], keyof P>> {
  render () {
    const { className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return <p {...notCommonParameters} className={className} />;
  }
}

export default Text;
