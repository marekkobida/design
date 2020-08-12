import React from 'react';

import decodeClassName from '../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../helpers/decodeCommonParameters';

interface P {
  $: 'tbody' | 'tfoot' | 'thead';
}

class TableSection extends React.Component<CommonParameters & Omit<React.ComponentPropsWithoutRef<P['$']>, keyof CommonParameters> & P> {
  render () {
    const { $, className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return <$ {...notCommonParameters} className={decodeClassName(className)} />;
  }
}

export default TableSection;
