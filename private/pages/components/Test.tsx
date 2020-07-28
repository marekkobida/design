import React from 'react';

import Div from '../../components/Div';
import Heading from '../../components/Heading';
import Input from '../../components/Input';
import Label from '../../components/Label';
import { AlignContentProperty, AlignItemsProperty, FlexDirectionProperty, FlexWrapProperty, JustifyContentProperty, TextAlignProperty, } from '../../helpers/decodeCommonParameters';

function test<T extends { [propertyName: string]: readonly (number | string)[]; }> (t: T): T & { [propertyName: string]: readonly (number | string)[]; } {
  return t;
}

const availableProperties = test({
  alignContent: AlignContentProperty,
  alignItems: AlignItemsProperty,
  flexDirection: FlexDirectionProperty,
  flexWrap: FlexWrapProperty,
  justifyContent: JustifyContentProperty,
  textAlign: TextAlignProperty,
});

interface P {
  availableComponents: {
    [id: string]: {
      component: unknown;
      id: string;
      isActive: boolean;
      properties: S['properties'];
    };
  };
  t1: (id: string, properties: S['properties']) => void;
  t2: (id: string) => () => void;
}

interface S {
  properties: { [propertyName in keyof typeof availableProperties]?: typeof availableProperties[propertyName][number] };
}

class Test extends React.Component<P, S> {
  state: S = { properties: {}, };

  componentDidUpdate (prevProps: Readonly<P>) {
    let prevLast;
    let currentLast;

    for (const a in prevProps.availableComponents) {
      if (prevProps.availableComponents[a].isActive) {
        prevLast = prevProps.availableComponents[a];
      }
    }

    for (const a in this.props.availableComponents) {
      if (this.props.availableComponents[a].isActive) {
        currentLast = this.props.availableComponents[a];
      }
    }

    if (prevLast === undefined && currentLast?.isActive === true) {
      this.setState((state) => ({ ...state, properties: {}, }));
      for (const b in currentLast.component.props) {
        if (b in availableProperties) {
          this.test(currentLast.component.props[b], b)();
        }
      }
    }

    if (prevLast && currentLast) {
      if (prevLast.id !== currentLast.id) {
        this.setState((state) => ({ ...state, properties: {}, }));
        for (const b in currentLast.component.props) {
          if (b in availableProperties) {
            this.test(currentLast.component.props[b], b)();
          }
        }
      }
    }
  }

  test = (property, propertyName) => {
    return () => {
      this.setState((state) => {
        state = { ...state, properties: { ...state.properties, [propertyName]: property, }, };

        for (const testComponentId in this.props.availableComponents) {
          if (this.props.availableComponents[testComponentId].isActive) {
            this.props.t1(testComponentId, state.properties);
          }
        }

        return state;
      });
    };
  }

  render () {
    let $: React.ReactNode[] = [];

    for (const propertyName in availableProperties) {
      $ = [
        ...$,
        (
          <Div className="border p-2" key={propertyName}>
            <Heading size={6}>{propertyName}</Heading>
            {
              availableProperties[propertyName].map((property) => (
                <Div alignItems="center" className="display-inline-flex" key={property} p={2}>
                  <Input
                    checked={property === this.state.properties[propertyName]}
                    id={`${propertyName}-${property}`}
                    mR={2}
                    name={propertyName}
                    onClick={this.test(property, propertyName)}
                    type="radio"
                    value={property}
                  />
                  <Label htmlFor={`${propertyName}-${property}`}>{property}</Label>
                </Div>
              ))
            }
          </Div>
        ),
      ];
    }

    let cmp = [];

    for (const a in this.props.availableComponents) {
      cmp = [ ...cmp, this.props.availableComponents[a].id, ];
    }

    return (
      <>
        <Div display="flex">
          {
            cmp.map((id) => (
              <Div key={id} p={2}>
                <Div alignItems="center" display="flex">
                  <Input id={id} mR={2} name={id} onClick={this.props.t2(id)} type="checkbox" value={id} />
                  <Label htmlFor={id}>{id}</Label>
                </Div>
              </Div>
            ))
          }
        </Div>
        {$}
      </>
    );
  }
}

export default Test;
