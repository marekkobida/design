import React from 'react';

import createClassName from '../helpers/createClassName';

import Element from './Element';

class Container extends React.Component<Element['props']> {
  render() {
    const { className, ...props } = this.props;

    const createdClassName = createClassName('container m-x-# p-x-2', className);

    return <Element {...props} className={createdClassName} />;
  }
}

export default Container;
