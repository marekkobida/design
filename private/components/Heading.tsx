import React from 'react';

import decodeTextParameters from './decodeTextParameters';

type P = Parameters<typeof decodeTextParameters>[0];

class Heading extends React.Component<P & Omit<JSX.IntrinsicElements['h1'], keyof P>> {
  render () {
    const { className, ...props } = decodeTextParameters(this.props);

    const H = `h${this.props.size}` as 'h1';

    return <H {...props} className={className} />;
  }
}

export default Heading;
