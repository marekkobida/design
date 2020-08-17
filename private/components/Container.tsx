import React from 'react';

import Div from './html/Div';

class Container extends React.Component<Div['props']> {
  static defaultProps = { mX: 'auto', pX: 4, };

  render () {
    const { className, ...commonParameters } = this.props;

    return <Div {...commonParameters} className={[ 'container', className, ]} />;
  }
}

export default Container;
