import ServerRequest from '@redredsk/helpers/private/ServerRequest';
import React from 'react';

import DesignComponent from './DesignComponent';

interface P { to: string; }

class Anchor extends DesignComponent<React.ComponentPropsWithoutRef<'a'> & P> {
  serverRequest: ServerRequest = new ServerRequest('http://127.0.0.1:1337');

  onClick: Anchor['props']['onClick'] = (event) => {
    this.serverRequest.get('/statistics/statistics.json', { parameters: { url: this.props.to, }, });

    if (this.props.onClick) {
      this.props.onClick(event);
    }
  }

  render () {
    const { className, to, ...notCommonParameters } = this.decodedCommonParameters;

    return <a {...notCommonParameters} className={className} href={to} onClick={this.onClick} />;
  }
}

export default Anchor;
