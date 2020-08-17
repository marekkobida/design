import React from 'react';

import Div from './html/Div';

class Column extends React.Component<Div['props']> {
  static defaultProps = { pX: 2, };

  render () {
    return <Div {...this.props} />;
  }
}

export default Column;
