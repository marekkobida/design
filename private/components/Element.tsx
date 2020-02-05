import React from 'react';

import createClassName, { ClassName, } from '../helpers/createClassName';

interface P {
  className?: ClassName | ClassName[];
  t?: keyof React.ReactHTML;
}

class Element extends React.Component<P & Omit<React.ComponentPropsWithoutRef<'div'>, keyof P>> {
  render () {
    const { className, t = 'div', ...props } = this.props;

    const T = t;

    const createdClassName = createClassName(className);

    return <T {...props} className={createdClassName} />;
  }
}

export default Element;
