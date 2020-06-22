import React from 'react';

interface P {

}

class Container extends React.Component<P & Omit<JSX.IntrinsicElements['div'], keyof P>> {
  render () {
    const { className, ...props } = this.props;

    const $ = [ 'container m-x-# p-x-2', className, ];

    return <div {...props} className={$} />;
  }
}

export default Container;
