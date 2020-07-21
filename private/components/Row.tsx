import React from 'react';

import DesignComponent from './DesignComponent';

class Row extends DesignComponent<React.ComponentPropsWithoutRef<'div'>> {
  static defaultProps: Row['props'] = { flexWrap: 'wrap', mX: '!2', };

  render () {
    const { className, ...notCommonParameters } = this.decodedCommonParameters;

    return <div {...notCommonParameters} className={[ 'flex', className, ]} />;
  }
}

export default Row;
