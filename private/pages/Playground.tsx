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

console.log(css);

class Playground extends Page {
  constructor () {
    super(-1, 'playground');
  }

  element () {
    return (
      <Container>
        <Test mY={8} />
        <Div mY={8}>
          <Anchor href="#">Anchor</Anchor>
          <Heading size={1}>Heading 1</Heading>
          <Heading size={2}>Heading 2</Heading>
          <Heading size={3}>Heading 3</Heading>
          <Heading size={4}>Heading 4</Heading>
          <Heading size={5}>Heading 5</Heading>
          <Heading size={6}>Heading 6</Heading>
          <Paragraph>Paragraph</Paragraph>
        </Div>
        <Row mY={8}>
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
      </Container>
    );
  }

  template = template();
}

export default Playground;
