import React from 'react';

import createClassName from '../helpers/createClassName';
import createResponsiveClassName from '../helpers/createResponsiveClassName';

import Element from './Element';
import Text from './Text';

interface P {
  alignment?: Text['props']['alignment'];
  color?: string;
  size: 1 | 2 | 3 | 4 | 5 | 6;
  weight?: Text['props']['weight'];
}

class Heading extends React.Component<P & Omit<React.ComponentPropsWithoutRef<'h1'>, keyof P> & Omit<Element['props'], keyof P>> {
  render () {
    const {
      alignment, className, color, size, weight, ...props
    } = this.props;

    const createdClassName = createClassName(
      color && `color_${color}`,
      createResponsiveClassName([ 't', 'alignment', alignment, ]),
      weight && `t_weight_${weight}`,
      className
    );

    const E = `h${size}` as 'h1';

    return <E {...props} className={createdClassName} />;
  }
}

export default Heading;
