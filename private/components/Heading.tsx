import React from 'react';

import decodeParameters from './decodeParameters';

type P = Parameters<typeof decodeParameters>[0];

class Heading extends React.Component<P & Omit<JSX.IntrinsicElements['h1'], keyof P>> {
  render () {
    const { className, ...props } = decodeParameters(this.props);

    const H = `h${this.props.textSize}` as 'h1';

    return <H {...props} className={className} />;
  }
}

export default Heading;
