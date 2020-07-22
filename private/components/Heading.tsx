import React from 'react';

import DesignComponent from './DesignComponent';

class Heading extends DesignComponent<React.ComponentPropsWithoutRef<'h1'>> {
  static defaultProps: Heading['props'] = { fontSize: 1, };

  render () {
    const { className, ...notCommonParameters } = this.decodedCommonParameters;

    const H = `h${this.props.fontSize}` as 'h1';

    return <H {...notCommonParameters} className={className} />;
  }
}

export default Heading;
