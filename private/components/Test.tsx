import React from 'react';

import decodeClassName from '../helpers/decodeClassName';
import decodeCommonParameters, { CommonParameters, } from '../helpers/decodeCommonParameters';
import Div from '../htmlComponents/Div';
import Input from '../htmlComponents/Input';

interface P {
  children: (addParameter: (left: string, right: number | string, $?: boolean) => void) => React.ReactNode;
  test: (parameters: S['parameters']) => string;
}

interface S {
  isActive: boolean;
  parameters: [string, number | string][];
}

class Test extends React.Component<CommonParameters & Omit<React.ComponentPropsWithoutRef<'input'>, keyof CommonParameters> & P, S> {
  div: React.RefObject<HTMLDivElement> = React.createRef();

  state: S = { isActive: false, parameters: [], };

  componentDidMount () {
    document.addEventListener('mousedown', this.$);
  }

  componentWillUnmount () {
    document.removeEventListener('mousedown', this.$);
  }

  $ = (event: MouseEvent) => {
    if (!this.div.current?.contains(event.target as Node)) {
      this.setState((state) => ({ ...state, isActive: false, }));
    }
  }

  addParameter: Parameters<P['children']>[0] = (left, right, $ = false) => {
    this.setState((state) => {
      let existuje = false;

      for (let i = 0; i < state.parameters.length; i += 1) {
        const defaultValue = state.parameters[i];

        if ($) {
          if (defaultValue[0] === left && defaultValue[1] === right) {
            existuje = i;
          }
        } else if (defaultValue[0] === left) {
          existuje = i;
        }
      }

      if (typeof existuje === 'number') {
        let s = {
          ...state,
          parameters: state.parameters.filter((defaultValue, i) => i !== existuje),
        };

        if (!$) {
          if (this.state.parameters[existuje][1] !== right) {
            s = { ...s, parameters: [ ...s.parameters, [ left, right, ], ], };
          }
        }

        return s;
      } else {
        return { ...state, parameters: [ ...state.parameters, [ left, right, ], ], };
      }
    });
  }

  render () {
    const { children, className, test, ...notCommonParameters } = decodeCommonParameters(this.props);

    return (
      <div className={decodeClassName('relative')} ref={this.div}>
        <Input
          {...notCommonParameters}
          className={decodeClassName(className)}
          onFocus={() => this.setState((state) => ({ ...state, isActive: true, }))}
          readOnly
          value={test(this.state.parameters)}
        />
        {this.state.parameters.map((parameter, i) => <Input key={i} name={parameter[0]} readOnly type="hidden" value={parameter[1]} />)}
        {this.state.isActive && <Div className="absolute" width="100">{children(this.addParameter)}</Div>}
      </div>
    );
  }
}

export default Test;
