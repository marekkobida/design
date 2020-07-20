import React from 'react';

import DesignComponent from './DesignComponent';

class Container extends DesignComponent<JSX.IntrinsicElements['div']> {
  static defaultProps: Container['props'] = { mX: '#', pX: 2, };

  render () {
    const { className, ...notCommonParameters } = this.decodedCommonParameters;

    return <div {...notCommonParameters} className={[ 'container', className, ]} />;
  }
}

export default Container;
