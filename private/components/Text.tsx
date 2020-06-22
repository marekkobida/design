import React from 'react';
import createResponsiveClassName, { ResponsiveClassName, } from '../helpers/createResponsiveClassName';

interface P {
  alignment?: ResponsiveClassName<'#' | 'l' | 'r'>;
  color?: string;
  m?: ResponsiveClassName<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 16>;
  p?: ResponsiveClassName<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 16>;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
}

class Text extends React.Component<P & Omit<JSX.IntrinsicElements['p'], keyof P>> {
  render () {
    const { alignment, className, color, m, p, size, weight, ...props } = this.props;

    const $ = [
      color && `color_${color}`,
      size && `h${size}`,
      createResponsiveClassName('m-', m),
      createResponsiveClassName('p-', p),
      createResponsiveClassName('t_alignment_', alignment),
      weight && `t_weight_${weight}`,
      className,
    ];

    return <p {...props} className={$} />;
  }
}

export default Text;
