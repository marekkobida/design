import React from 'react';

import DesignComponent from './DesignComponent';

class Label extends DesignComponent<React.ComponentPropsWithoutRef<'label'>> {
  render () {
    const { className, ...notCommonParameters } = this.decodedCommonParameters;

    return <label {...notCommonParameters} className={className} />;
  }
}

export default Label;
