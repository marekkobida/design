import React from 'react';

import Div from '../htmlComponents/Div';

class Row extends React.Component<Div['props']> {
  static defaultProps = { display: 'flex', flexWrap: 'wrap', mX: '!2', };

  render () {
    return <Div {...this.props} />;
  }
}

export default Row;
