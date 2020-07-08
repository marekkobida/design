import React from 'react';

import { EncodedClassName, } from '../helpers/decodeClassName';

interface P {
  className?: EncodedClassName | EncodedClassName[];
}

class Container extends React.Component<P & Omit<JSX.IntrinsicElements['div'], keyof P>> {
  render () {
    const { className, ...props } = this.props;

    return <div {...props} className={[ 'container m-x-# p-x-2', className, ]} />;
  }
}

export default Container;
