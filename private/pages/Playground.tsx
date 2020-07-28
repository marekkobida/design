import Page from '@redredsk/pages/private/Page';
import template from '@redredsk/pages/private/template';
import React from 'react';

import Anchor from '../components/Anchor';
import Button from '../components/Button';
import Column from '../components/Column';
import Container from '../components/Container';
import Div from '../components/Div';
import Heading from '../components/Heading';
import Input from '../components/Input';
import Label from '../components/Label';
import Paragraph from '../components/Paragraph';
import Row from '../components/Row';

import Test from './components/Test';

class Playground extends Page {
  constructor () {
    super(-1, 'playground');
  }

  element () {
    interface S {
      testComponents: {
        [id: string]: {
          component: any;
          isActive: boolean;
          properties: {
            [propertyName: string]: string;
          };
        };
      };
    }

    class $ extends React.Component<{}, S> {
      state: S = { testComponents: {}, }

      test = (component: any): void => {
        const id = component.props.id;

        this.setState((state) => ({
          ...state,
          testComponents: {
            ...state.testComponents,
            [id]: {
              component,
              isActive: false,
              properties: {},
            },
          },
        }));
      }

      test1 = (event) => {
        const { id, } = event.currentTarget;

        this.setState((state) => ({
          ...state,
          testComponents: {
            ...state.testComponents,
            [id]: {
              ...state.testComponents[id],
              isActive: !state.testComponents[id].isActive,
            },
          },
        }));
      }

      render () {
        return (
          <Container>
            <Test parent={this} testComponents={this.state.testComponents} />
            <Div style={{ paddingBottom: '50%', position: 'relative', }}>
              <Row
                {...this.state.testComponents['testComponent']?.properties}
                className="border"
                id="testComponent"
                onClick={this.test1}
                ref={this.test}
                style={{ bottom: 0, left: 0, position: 'absolute', right: 0, top: 0, }}
              >
                <Column className="border" columnSize="#">"#"</Column>
                <Column className="border" columnSize="width">"width"</Column>
                <Column className="border" columnSize={12}>12</Column>
                <Column className="border" columnSize={4}>4</Column>
                <Column className="border" columnSize={4}>4</Column>
              </Row>
            </Div>
            <Anchor href="#">Anchor</Anchor>
            <Heading size={1}>Heading 1</Heading>
            <Heading size={2}>Heading 2</Heading>
            <Heading size={3}>Heading 3</Heading>
            <Heading size={4}>Heading 4</Heading>
            <Heading size={5}>Heading 5</Heading>
            <Heading size={6}>Heading 6</Heading>
            <Paragraph>Paragraph</Paragraph>
            <Row className="border">
              <Column className="border" columnSize={[ 12, { '#': 6, }, ]}>
                <Div mY={2}>
                  <Label htmlFor="a" mB={2}>Label</Label>
                  <Input id="a" placeholder="Input" type="text" />
                </Div>
                <Div mY={2}>
                  <Label htmlFor="b" mB={2}>Label</Label>
                  <Input id="b" type="radio" />
                </Div>
                <Div mY={2}>
                  <Label htmlFor="c" mB={2}>Label</Label>
                  <Input id="c" type="checkbox" />
                </Div>
              </Column>
              <Column className="border" columnSize={[ 12, { '#': 6, }, ]}>
                <Div mY={2}>
                  <Label htmlFor="d" mB={2}>Label</Label>
                  <Input id="d" placeholder="Input" type="text" />
                </Div>
                <Div mY={2}>
                  <Button type="button">Button</Button>
                </Div>
              </Column>
            </Row>
          </Container>
        );
      }
    }

    return <$ />;
  }

  template = template();
}

export default Playground;
