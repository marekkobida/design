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

import css from './Playground.css';
import Test from './components/Test';

class Playground extends Page {
  constructor () {
    super(-1, 'playground');
  }

  element () {
    return (
      <>
        <Div className={css.test} pX={3}>
          <Row alignItems="center">
            <Column columnSize="width" mL="#">
              <Row alignItems="center">
                <Column>
                  <Anchor href="#" pY={2}>Anchor</Anchor>
                </Column>
                <Column>
                  <Anchor href="#" pY={2}>Anchor</Anchor>
                </Column>
                <Column>
                  <Button type="button">Button</Button>
                </Column>
              </Row>
            </Column>
          </Row>
          <Row alignItems="center">
            <Column columnSize="width">
              <Anchor className="border-bottom display-block" href="#" pY={4}>Anchor</Anchor>
            </Column>
            <Column columnSize="width">
              <Anchor className="display-block" href="#" pY={4}>Anchor</Anchor>
            </Column>
            <Column columnSize="width">
              <Anchor className="display-block" href="#" pY={4}>Anchor</Anchor>
            </Column>
          </Row>
        </Div>
        <Container>
          <Test />
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
      </>
    );
  }

  template = template();
}

export default Playground;
