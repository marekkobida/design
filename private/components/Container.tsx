import React from 'react';
import { ClassName, } from '../helpers/createClassName';

interface P {
  className?: ClassName | ClassName[];
}

class Container extends React.Component<P & Omit<JSX.IntrinsicElements['div'], keyof P>> {
  render () {
    const { className, ...props } = this.props;

    return <div {...props} className={[ 'container m-x-# p-x-2', className, ]} />;
  }
}

export default Container;
