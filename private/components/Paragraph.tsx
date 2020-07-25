import React from 'react';

import decodeCommonParameters, { CommonParameters, } from '../helpers/decodeCommonParameters';

class Paragraph extends React.Component<React.ComponentPropsWithRef<'p'> & CommonParameters> {
  render () {
    const { className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return <p {...notCommonParameters} className={className} />;
  }
}

export default Paragraph;
