import React from 'react';

import decodeCommonParameters, { CommonParameters, } from '../helpers/decodeCommonParameters';

interface P { size: 1 | 2 | 3 | 4 | 5 | 6; }

class Heading extends React.Component<React.ComponentPropsWithRef<'h1'> & P & CommonParameters> {
  render () {
    const { className, size, ...notCommonParameters } = decodeCommonParameters(this.props);

    const H = `h${size}` as 'h1';

    return <H {...notCommonParameters} className={className} />;
  }
}

export default Heading;
