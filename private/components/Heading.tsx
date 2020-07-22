import React from 'react';

import DesignComponent from './DesignComponent';

interface P { size: 1 | 2 | 3 | 4 | 5 | 6; }

class Heading extends DesignComponent<React.ComponentPropsWithoutRef<'h1'> & P> {
  render () {
    const { className, size, ...notCommonParameters } = this.decodedCommonParameters;

    const H = `h${size}` as 'h1';

    return <H {...notCommonParameters} className={className} />;
  }
}

export default Heading;
