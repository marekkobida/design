import React from 'react';
import ServerRequest from '@redredsk/helpers/private/ServerRequest';
import Text from './Text';
import createResponsiveClassName from '../helpers/createResponsiveClassName';

interface P {
  alignment?: Text['props']['alignment'];
  color?: Text['props']['color'];
  size?: Text['props']['size'];
  to: string;
  weight?: Text['props']['weight'];
}

class Link extends React.Component<P & Omit<JSX.IntrinsicElements['a'], keyof P>> {
  serverRequest: ServerRequest = new ServerRequest('http://127.0.0.1:1337');

  onClick: Link['props']['onClick'] = (event) => {
    this.serverRequest.get('/statistics/statistics.json', { parameters: { url: this.props.to, }, });

    if (this.props.onClick) {
      this.props.onClick(event);
    }
  }

  render () {
    const { alignment, className, color, onClick, size, to, weight, ...props } = this.props;

    return (
      <a
        {...props}
        className={[
          color && `color_${color}`,
          size && `h${size}`,
          createResponsiveClassName('t_alignment_', alignment),
          weight && `t_weight_${weight}`,
          className,
        ]}
        href={to}
        onClick={this.onClick}
      />
    );
  }
}

export default Link;
