import React from 'react';

import createClassName, { ClassName, } from '../helpers/createClassName';

interface P {
  className?: ClassName | ClassName[];
}

class Element<L extends keyof React.ReactHTML> extends React.Component<P & { t?: L } & Omit<React.ComponentPropsWithoutRef<L>, keyof P>> {
  render () {
    const { className, t = 'div', ...props } = this.props;

    const T = t;

    const createdClassName = createClassName(className);

    return <T {...props} className={createdClassName} />;
  }
}

export default Element;
