import React from 'react';

import decodeCommonParameters from './decodeCommonParameters';

type P = Parameters<typeof decodeCommonParameters>[0];

class Heading extends React.Component<P & Omit<JSX.IntrinsicElements['h1'], keyof P>> {
  render () {
    const { fontSize, ...parameters } = this.props;

    const { className, ...notCommonParameters } = decodeCommonParameters(parameters);

    const H = `h${fontSize}` as 'h1';

    return <H {...notCommonParameters} className={className} />;
  }
}

export default Heading;
