import React from 'react';

import ServerRequest from '@redredsk/helpers/private/ServerRequest';
import createClassName, { ClassName, } from '../helpers/createClassName';
import createResponsiveClassName from '../helpers/createResponsiveClassName';

import Text from './Text';

interface P {
  alignment?: Text['props']['alignment'];
  className?: ClassName | ClassName[];
  color?: string;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  to: string;
  weight?: Text['props']['weight'];
}

class Link extends React.Component<P & Omit<React.ComponentPropsWithoutRef<'a'>, keyof P>> {
  serverRequest: ServerRequest = new ServerRequest('http://127.0.0.1:1339');

  onClick: Link['props']['onClick'] = (event) => {
    this.serverRequest.get('/statistics.json', { parameters: { url: this.props.to, }, });

    if (this.props.onClick) {
      this.props.onClick(event);
    }
  }

  render () {
    const {
      alignment, className, color, onClick, size, to, weight, ...props
    } = this.props;

    const createdClassName = createClassName(
      color && `color_${color}`,
      size && `h${size}`,
      createResponsiveClassName([ 't', 'alignment', alignment, ]),
      weight && `t_weight_${weight}`,
      className
    );

    return <a {...props} className={createdClassName} href={to} onClick={this.onClick} />;
  }
}

export default Link;
