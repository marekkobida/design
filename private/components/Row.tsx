import React from 'react';

import DesignComponent from './DesignComponent';

class Row extends DesignComponent<React.ComponentPropsWithoutRef<'div'>> {
  render () {
    const { className, ...notCommonParameters } = this.decodedCommonParameters;

    return <div {...notCommonParameters} className={[ 'row', className, ]} />;
  }
}

export default Row;
