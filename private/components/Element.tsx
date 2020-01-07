import React from 'react';

import createClassName from '../helpers/createClassName';

interface P {
  className?: Parameters<typeof createClassName>[0];
}

class Element extends React.Component<P & Omit<React.HTMLAttributes<HTMLDivElement>, keyof P>> {
  render() {
    const { className, ...props } = this.props;

    const createdClassName = createClassName(className);

    return <div {...props} className={createdClassName} />;
  }
}

export default Element;
