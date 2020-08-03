import React from 'react';

import decodeClassName from '../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../helpers/decodeCommonParameters';

class Paragraph extends React.Component<CommonParameters & Omit<React.ComponentPropsWithoutRef<'p'>, keyof CommonParameters>> {
  render () {
    const { className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return <p {...notCommonParameters} className={decodeClassName(className)} />;
  }
}

export default Paragraph;
