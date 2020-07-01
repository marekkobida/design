import React from 'react';
import handleTextParameters from './handleTextParameters';

type P = Parameters<typeof handleTextParameters>[0];

class Text extends React.Component<P & Omit<JSX.IntrinsicElements['p'], keyof P>> {
  render () {
    const { className, ...props } = handleTextParameters(this.props);

    return <p {...props} className={className} />;
  }
}

export default Text;
