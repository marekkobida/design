import React from 'react';

import createClassName, { ClassName, } from '../helpers/createClassName';
import createResponsiveClassName from '../helpers/createResponsiveClassName';

import Text from './Text';

interface P {
  alignment?: Text['props']['alignment'];
  className?: ClassName | ClassName[];
  color?: string;
  size: 1 | 2 | 3 | 4 | 5 | 6;
  weight?: Text['props']['weight'];
}

class Heading extends React.Component<P & Omit<React.ComponentPropsWithoutRef<'h1'>, keyof P>> {
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
