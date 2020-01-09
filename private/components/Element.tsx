import React from 'react';

import createClassName, { ClassName } from '../helpers/createClassName';

interface P {
  className?: ClassName | ClassName[];
}

class Element extends React.Component<P & Omit<React.ComponentPropsWithoutRef<'div'>, keyof P>> {
  render() {
    const { className, ...props } = this.props;

    const createdClassName = createClassName(className);

    return <div {...props} className={createdClassName} />;
  }
}

export default Element;
