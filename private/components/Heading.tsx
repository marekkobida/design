import React from 'react';
import Text from './Text';
import createResponsiveClassName from '../helpers/createResponsiveClassName';

interface P {
  alignment?: Text['props']['alignment'];
  color?: Text['props']['color'];
  size: Text['props']['size'];
  weight?: Text['props']['weight'];
}

class Heading extends React.Component<P & Omit<JSX.IntrinsicElements['h1'], keyof P>> {
  render () {
    const { alignment, className, color, size, weight, ...props } = this.props;

    const $ = [
      color && `color_${color}`,
      createResponsiveClassName('t_alignment_', alignment),
      weight && `t_weight_${weight}`,
      className,
    ];

    const E = `h${size}` as 'h1';

    return <E {...props} className={$} />;
  }
}

export default Heading;
