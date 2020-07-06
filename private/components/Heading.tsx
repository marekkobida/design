import React from 'react';

import handleTextParameters from './handleTextParameters';

type P = Parameters<typeof handleTextParameters>[0];

class Heading extends React.Component<P & Omit<JSX.IntrinsicElements['h1'], keyof P>> {
  render () {
    const { className, ...props } = handleTextParameters(this.props);

    const H = `h${this.props.size}` as 'h1';

    return <H {...props} className={className} />;
  }
}

export default Heading;
