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
      alignItems: 'baseline',
      flexDirection: 'row-reverse',
      flexWrap: 'wrap-reverse',
      justifyContent: 'center',
      textAlign: 'center',
    },
  };

  render () {
    let $: React.ReactNode[] = [];

    for (const propertyName in properties) {
      $ = [
        ...$,
        (
          <Column columnSize={6} key={propertyName}>
            <Heading mY={2} size={6}>{propertyName}</Heading>
            {
              properties[propertyName].map((property) => (
                <div className="align-items-center display-inline-flex p-2" key={property}>
                  <Input
                    defaultChecked={property === this.state.properties[propertyName]}
                    id={`${propertyName}-${property}`}
                    mR={1}
                    name={propertyName}
                    onClick={() => this.setState((state) => ({ ...state, properties: { ...state.properties, [propertyName]: property, }, }))}
                    type="radio"
                    value={property}
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
        <Row {...this.state.properties} style={{ overflow: 'auto', }}>
          <Column columnSize="width">
            <div className="p-4" style={{ backgroundColor: '#000', color: '#fff', }}>1</div>
          </Column>
          <Column columnSize="width">
            <div className="p-8" style={{ backgroundColor: '#000', color: '#fff', }}>2<br />3<br />4</div>
          </Column>
          <Column columnSize={12}>
            <div className="p-4" style={{ backgroundColor: '#000', color: '#fff', }}>5</div>
          </Column>
        </Row>
      </div>
    );
  }
}

export default Test;
