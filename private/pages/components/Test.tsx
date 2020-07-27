import React from 'react';

import Column from '../../components/Column';
import Div from '../../components/Div';
import Heading from '../../components/Heading';
import Input from '../../components/Input';
import Label from '../../components/Label';
import Row from '../../components/Row';
import { AlignContentProperty, AlignItemsProperty, CommonParameters, FlexDirectionProperty, FlexWrapProperty, JustifyContentProperty, TextAlignProperty, } from '../../helpers/decodeCommonParameters';

function test<T extends { [propertyName: string]: readonly string[]; }> (t: T): T & { [propertyName: string]: readonly string[]; } {
  return t;
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
  properties: { [propertyName in keyof typeof properties]: typeof properties[propertyName][number] };
  t: boolean;
}

class Test extends React.Component<React.ComponentPropsWithoutRef<'div'> & CommonParameters, S> {
  state: S = {
    properties: {
      alignContent: 'center',
      alignItems: 'baseline',
      flexDirection: 'row-reverse',
      flexWrap: 'wrap-reverse',
      justifyContent: 'center',
      textAlign: 'center',
    },
    t: false,
  };

  render () {
    let $: React.ReactNode[] = [];

    if (this.state.t) {
      for (const propertyName in properties) {
        $ = [
          ...$,
          (
            <Column columnSize={6} key={propertyName}>
              <Heading mY={2} size={6}>{propertyName}</Heading>
              {
                properties[propertyName].map((property) => (
                  <Div alignItems="center" className="display-inline-flex" key={property} p={2}>
                    <Input
                      defaultChecked={property === this.state.properties[propertyName]}
                      id={`${propertyName}-${property}`}
                      mR={2}
                      name={propertyName}
                      onClick={() => this.setState((state) => ({ ...state, properties: { ...state.properties, [propertyName]: property, }, }))}
                      type="radio"
                      value={property}
                    />
                    <Label htmlFor={`${propertyName}-${property}`}>{property}</Label>
                  </Div>
                ))
              }
            </Column>
          ),
        ];
      }
    }

    return (
      <Div {...this.props}>
        <Div alignItems="center" className="border display-flex" p={2}>
          <Input
            id="t"
            mR={2}
            onClick={() => this.setState((state) => ({ ...state, t: !this.state.t, }))}
            type="checkbox"
          />
          <Label htmlFor="t">Som vývojár</Label>
        </Div>
        {this.state.t && <Row>{$}</Row>}
        <Div style={{ paddingBottom: '50%', position: 'relative', }}>
          <Row {...this.state.properties} style={{ bottom: 0, left: 0, position: 'absolute', right: 0, top: 0, }}>
            <Column columnSize="width">Column</Column>
            <Column columnSize="width">
              <Heading size={1}>Column</Heading>
            </Column>
            <Column columnSize={12}>Column</Column>
          </Row>
        </Div>
      </Div>
    );
  }
}

export default Test;
