import React from 'react';

import DesignComponent from './DesignComponent';

class Input extends DesignComponent<React.ComponentPropsWithoutRef<'input'>> {
  render () {
    const { className, ...notCommonParameters } = this.decodedCommonParameters;

    return <input {...notCommonParameters} className={className} />;
  }
}

export default Input;
