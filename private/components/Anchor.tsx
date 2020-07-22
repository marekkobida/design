import ServerRequest from '@redredsk/helpers/private/ServerRequest';
import React from 'react';

import DesignComponent from './DesignComponent';

class Anchor extends DesignComponent<React.ComponentPropsWithoutRef<'a'>> {
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
    const { className, ...notCommonParameters } = this.decodedCommonParameters;

    return <a {...notCommonParameters} className={className} onClick={this.onClick} />;
  }
}

export default Anchor;
