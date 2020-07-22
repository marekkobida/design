import React from 'react';

import DesignComponent from './DesignComponent';

class Container extends DesignComponent<React.ComponentPropsWithoutRef<'div'>> {
  render () {
    const { className, ...notCommonParameters } = this.decodedCommonParameters;

    return <div {...notCommonParameters} className={[ 'container', className, ]} />;
  }
}

export default Container;
