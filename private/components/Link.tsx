import ServerRequest from '@redredsk/helpers/private/ServerRequest';
import React from 'react';

import decodeSharedParameters from './decodeSharedParameters';
import decodeTextParameters from './decodeTextParameters';

type P = { to: string; } & Parameters<typeof decodeSharedParameters>[0] & Parameters<typeof decodeTextParameters>[0];

class Link extends React.Component<P & Omit<JSX.IntrinsicElements['a'], keyof P>> {
  serverRequest: ServerRequest = new ServerRequest('http://127.0.0.1:1337');

  onClick: Link['props']['onClick'] = (event) => {
    this.serverRequest.get('/statistics/statistics.json', { parameters: { url: this.props.to, }, });

    if (this.props.onClick) {
      this.props.onClick(event);
    }
  }

  render () {
    const { className: L, ...l } = decodeSharedParameters(this.props);
    const { className: R, to, ...r } = decodeTextParameters(l);

    return <a {...r} className={[ L, R, ]} href={to} onClick={this.onClick} />;
  }
}

export default Link;
