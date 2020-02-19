import React from 'react';

import createClassName, { ClassName, } from '../helpers/createClassName';

interface P {
  className?: ClassName | ClassName[];
}

class Container extends React.Component<P> {
  render () {
    const { className, ...props } = this.props;

    const createdClassName = createClassName('container m-x-# p-x-2', className);

    return <div {...props} className={createdClassName} />;
  }
}

export default Container;
