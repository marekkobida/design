import React from 'react';

import createClassName from '../helpers/createClassName';
import createResponsiveClassName, { ResponsiveClassName } from '../helpers/createResponsiveClassName';

import Element from './Element';

interface P {
  alignment?: ResponsiveClassName<'#' | 'l' | 'r'>;
  color?: string;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
}

class Text extends React.Component<P & Omit<React.ComponentPropsWithoutRef<'p'>, keyof P> & Omit<Element['props'], keyof P>> {
  render() {
    const {
      alignment, className, color, size, weight, ...props
    } = this.props;

    const createdClassName = createClassName(
      color && `color_${color}`,
      size && `h${size}`,
      createResponsiveClassName(['t', 'alignment', alignment]),
      weight && `t_weight_${weight}`,
      className,
    );

    return <p {...props} className={createdClassName} />;
  }
}

export default Text;
