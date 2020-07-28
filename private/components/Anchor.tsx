import ServerRequest from '@redredsk/helpers/private/ServerRequest';
import React from 'react';

import decodeClassName from '../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../helpers/decodeCommonParameters';

class Anchor extends React.Component<React.ComponentPropsWithoutRef<'a'> & CommonParameters> {
  serverRequest: ServerRequest = new ServerRequest('http://127.0.0.1:1337');

  onClick: Anchor['props']['onClick'] = (event) => {
    if (this.props.href) {
      this.serverRequest.get('/statistics/statistics.json', { parameters: { url: this.props.href, }, });
    }

    if (this.props.onClick) {
      this.props.onClick(event);
    }
  }

  render () {
    const { className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return <a {...notCommonParameters} className={decodeClassName(className)} onClick={this.onClick} />;
  }
}

export default Anchor;
