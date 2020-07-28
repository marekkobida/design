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
      availableComponents: Test['props']['availableComponents'];
    }

    class $ extends React.Component<unknown, S> {
      state: S = { availableComponents: {}, }

      addComponentAsAvailable = (component) => {
        const { id, } = component.props;

        this.setState((s) => ({ ...s, availableComponents: { ...s.availableComponents, [id]: { component, id, isActive: false, properties: {}, }, }, }));
      }

      // update testComponent properties by id
      t1: Test['props']['t1'] = (id, properties) => {
        this.setState((s) => ({ ...s, availableComponents: { ...s.availableComponents, [id]: { ...s.availableComponents[id], properties, }, }, }));
      }

      // make testComponent active (onClick property)
      t2: Test['props']['t2'] = (id) => {
        return () => {
          this.setState((s) => ({ ...s, availableComponents: { ...s.availableComponents, [id]: { ...s.availableComponents[id], isActive: !s.availableComponents[id].isActive, }, }, }));
        };
      }

      render () {
        return (
          <Container style={{ maxWidth: 'inherit', }}>
            <Row>
              <Column columnSize={[ 12, { '#': 3, }, ]}>
                <Test availableComponents={this.state.availableComponents} t1={this.t1} t2={this.t2} />
              </Column>
              <Column columnSize={[ 12, { '#': '#', }, ]}>
                <Div style={{ paddingBottom: '50%', position: 'relative', }}>
                  <Row
                    alignContent="center"
                    id="layout"
                    ref={this.addComponentAsAvailable}
                    style={{ bottom: 0, left: 0, position: 'absolute', right: 0, top: 0, }}
                    {...this.state.availableComponents['layout']?.properties}
                  >
                    <Column columnSize="#">"#"</Column>
                    <Column columnSize="width">"width"</Column>
                    <Column columnSize={12}>12</Column>
                    <Column columnSize={4}>4</Column>
                    <Column columnSize={4}>4</Column>
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
                <Row id="test" ref={this.addComponentAsAvailable} {...this.state.availableComponents['test']?.properties}>
                  <Column columnSize={[ 12, { '#': 6, }, ]}>
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
                  <Column columnSize={[ 12, { '#': 6, }, ]}>
                    <Div mY={2}>
                      <Label htmlFor="d" mB={2}>Label</Label>
                      <Input id="d" placeholder="Input" type="text" />
                    </Div>
                    <Div mY={2}>
                      <Button type="button">Button</Button>
                    </Div>
                  </Column>
                </Row>
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
