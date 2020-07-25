import React from 'react';

import decodeCommonParameters, { CommonParameters, } from '../helpers/decodeCommonParameters';

class Label extends React.Component<React.ComponentPropsWithRef<'label'> & CommonParameters> {
  render () {
    const { className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return <label {...notCommonParameters} className={className} />;
  }
}

export default Label;
