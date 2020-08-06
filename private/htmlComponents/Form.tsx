import React from 'react';

import decodeClassName from '../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../helpers/decodeCommonParameters';

class Form extends React.Component<CommonParameters & Omit<React.ComponentPropsWithoutRef<'form'>, keyof CommonParameters>> {
  render () {
    const { className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return <form {...notCommonParameters} className={decodeClassName(className)} />;
  }
}

export default Form;
