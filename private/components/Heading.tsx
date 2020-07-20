import React from 'react';

import DesignComponent from './DesignComponent';

class Heading extends DesignComponent<JSX.IntrinsicElements['h1']> {
  render () {
    const { className, ...notCommonParameters } = this.decodedCommonParameters;

    const H = `h${this.props.fontSize}` as 'h1';

    return <H {...notCommonParameters} className={className} />;
  }
}

export default Heading;
