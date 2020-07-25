// TODO
import React from 'react';

import Column from '../../components/Column';
import Heading from '../../components/Heading';
import Input from '../../components/Input';
import Label from '../../components/Label';
import Row from '../../components/Row';
import { AlignContentProperty, AlignItemsProperty, FlexDirectionProperty, FlexWrapProperty, JustifyContentProperty, TextAlignProperty, } from '../../helpers/decodeCommonParameters';

function test<R extends { [propertyName: string]: readonly string[]; }> (obj: R): R & { [propertyName: string]: readonly string[]; } {
  return obj;
}

const properties = test({
  alignContent: AlignContentProperty,
  alignItems: AlignItemsProperty,
  flexDirection: FlexDirectionProperty,
  flexWrap: FlexWrapProperty,
  justifyContent: JustifyContentProperty,
  textAlign: TextAlignProperty,
});

interface S {
  properties: { [propertyName in keyof typeof properties]?: typeof properties[propertyName][number] };
}

class Test extends React.Component<unknown, S> {
  state: S = {
    properties: {
      alignItems: 'center',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'center',
      textAlign: 'left',
    },
  };

  render () {
    let $: React.ReactNode[] = [];

    for (const propertyName in properties) {
      $ = [
        ...$,
        (
          <Column columnSize={6} key={propertyName} pY={3}>
            <Heading size={6}>{propertyName}</Heading>
            {
              properties[propertyName].map((property) => (
                <div className="align-items-center display-inline-flex p-1" key={property}>
                  <Input
                    defaultChecked={property === this.state.properties[propertyName]}
                    id={`${propertyName}-${property}`}
                    mR={1}
                    name={propertyName}
                    onClick={() => this.setState((state) => ({ ...state, properties: { ...state.properties, [propertyName]: property, }, }))}
                    type="radio"
                    value={`${propertyName}-${property}`}
                  />
                  <Label htmlFor={`${propertyName}-${property}`}>{property}</Label>
                </div>
              ))
            }
          </Column>
        ),
      ];
    }

    return (
      <div className="m-y-4">
        <Row>{$}</Row>
        <Row {...this.state.properties}>
          <Column columnSize="width">
            <div className="border p-4">1</div>
          </Column>
          <Column columnSize="width">
            <div className="border p-8">2</div>
          </Column>
          <Column columnSize="width">
            <div className="border p-4">3</div>
          </Column>
        </Row>
      </div>
    );
  }
}

export default Test;
