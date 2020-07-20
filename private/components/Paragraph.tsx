import React from 'react';

import DesignComponent from './DesignComponent';

class Paragraph extends DesignComponent<JSX.IntrinsicElements['p']> {
  render () {
    const { className, ...notCommonParameters } = this.decodedCommonParameters;

    return <p {...notCommonParameters} className={className} />;
  }
}

export default Paragraph;
