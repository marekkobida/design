import React from 'react';

import decodeClassName from '../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../helpers/decodeCommonParameters';

interface P { headingSize: 1 | 2 | 3 | 4 | 5 | 6; }

class Heading extends React.Component<React.ComponentPropsWithoutRef<'h1'> & P & CommonParameters> {
  render () {
    const { className, headingSize, ...notCommonParameters } = decodeCommonParameters(this.props);

    const H = `h${headingSize}` as 'h1';

    return <H {...notCommonParameters} className={decodeClassName(className)} />;
  }
}

export default Heading;
