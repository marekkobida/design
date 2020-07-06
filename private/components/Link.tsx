import ServerRequest from '@redredsk/helpers/private/ServerRequest';
import React from 'react';

import handleTextParameters from './handleTextParameters';

type P = { to: string; } & Parameters<typeof handleTextParameters>[0];

class Link extends React.Component<P & Omit<JSX.IntrinsicElements['a'], keyof P>> {
  serverRequest: ServerRequest = new ServerRequest('http://127.0.0.1:1337');

  onClick: Link['props']['onClick'] = (event) => {
    this.serverRequest.get('/statistics/statistics.json', { parameters: { url: this.props.to, }, });

    if (this.props.onClick) {
      this.props.onClick(event);
    }
  }

  render () {
    const { className, to, ...props } = handleTextParameters(this.props);

    return <a {...props} className={className} href={to} onClick={this.onClick} />;
  }
}

export default Link;
