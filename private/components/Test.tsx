import React from 'react';

import decodeClassName from '../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../helpers/decodeCommonParameters';
import Div from '../htmlComponents/Div';
import Input from '../htmlComponents/Input';
import Label from '../htmlComponents/Label';

import css from './Test.css';

interface P {
  children: ($: (v: string) => void) => React.ReactNode;
}

interface S {
  isActive: boolean;
  v?: string;
}

class Test extends React.Component<CommonParameters & Omit<React.ComponentPropsWithoutRef<'div'>, keyof CommonParameters> & P, S> {
  state: S = { isActive: false, };

  active = (): void => {
    this.setState((state) => ({ ...state, isActive: !state.isActive, }));
  }

  render () {
    const { className, ...notCommonParameters } = decodeCommonParameters(this.props);

    return (
      <div {...notCommonParameters} className={decodeClassName([ css.relative, className, ])}>
        <Label htmlFor="test" mB={2}>Label</Label>
        <Input className="input" defaultValue={this.state.v} id="test" onClick={() => this.active()} readOnly type="text" />
        <Input defaultValue={this.state.v} type="hidden" />
        {this.state.isActive && <Div className={[ 'border', css.test, ]}>{this.props.children((v) => this.setState((state) => ({ ...state, v, })))}</Div>}
      </div>
    );
  }
}

export default Test;
