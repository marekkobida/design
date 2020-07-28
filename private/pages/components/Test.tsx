import React from 'react';

import Column from '../../components/Column';
import Div from '../../components/Div';
import Heading from '../../components/Heading';
import Input from '../../components/Input';
import Label from '../../components/Label';
import Row from '../../components/Row';
import { AlignContentProperty, AlignItemsProperty, FlexDirectionProperty, FlexWrapProperty, JustifyContentProperty, TextAlignProperty, } from '../../helpers/decodeCommonParameters';

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
  properties: { [propertyName in keyof typeof properties]?: typeof properties[propertyName][number] };
}

class Test extends React.Component<{}, S> {
  state: S = { properties: {}, };

  componentDidUpdate (prevProps) {
    if (prevProps !== this.props) {
      let lastActived;

      for (const testComponentId in this.props.testComponents) {
        if (this.props.testComponents[testComponentId].isActive) {
          lastActived = this.props.testComponents[testComponentId];
        }
      }

      if (lastActived) {
        // toto musí ťahať z lastActived.component.props
        console.log('lastActived', lastActived.properties);
        this.setState((state) => ({ ...state, properties: lastActived.properties, }));
      }
    }
  }

  test (property, propertyName) {
    return () => {
      this.setState((state) => {
        state = { ...state, properties: { ...state.properties, [propertyName]: property, }, };

        this.test1(state);

        return state;
      });
    };
  }

  test1 (state) {
    for (const testComponentId in this.props.testComponents) {
      if (this.props.testComponents[testComponentId].isActive) {
        this.props.parent.setState((parentState) => ({
          ...parentState,
          testComponents: {
            ...parentState.testComponents,
            [testComponentId]: {
              ...parentState.testComponents[testComponentId],
              properties: state.properties,
            },
          },
        }));
      }
    }
  }

  render () {
    let columns: React.ReactNode[] = [];

    for (const propertyName in properties) {
      columns = [
        ...columns,
        (
          <Column className="border" columnSize={6} key={propertyName}>
            <Heading mY={2} size={6}>{propertyName}</Heading>
            {
              properties[propertyName].map((property) => (
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
          </Column>
        ),
      ];
    }

    return <Row className="border">{columns}</Row>;
  }
}

export default Test;
