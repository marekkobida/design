import React from 'react';

import Div from './html/Div';

class Column extends React.Component<Div['props']> {
  static defaultProps = { pX: 2, width: 'auto', };

  render () {
    return <Div {...this.props} />;
  }
}

export default Column;
