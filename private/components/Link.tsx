import React from 'react';

import createClassName from '../helpers/createClassName';
import createResponsiveClassName from '../helpers/createResponsiveClassName';

import Element from './Element';
import Text from './Text';

interface P {
  alignment?: Text['props']['alignment'];
  color?: string;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  to: string;
  weight?: Text['props']['weight'];
}

class Link extends React.Component<P & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof P> & Omit<Element['props'], keyof P>> {
  render() {
    const {
      alignment, className, color, size, to, weight, ...props
    } = this.props;

    const createdClassName = createClassName(
      color && `color_${color}`,
      size && `h${size}`,
      createResponsiveClassName(['t', 'alignment', alignment]),
      weight && `t_weight_${weight}`,
      className,
    );

    return <a {...props} className={createdClassName} href={to} />;
  }
}

export default Link;
