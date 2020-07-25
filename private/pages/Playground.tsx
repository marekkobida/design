import Page from '@redredsk/pages/private/Page';
import template from '@redredsk/pages/private/template';
import React from 'react';

import Anchor from '../components/Anchor';
import Button from '../components/Button';
import Column from '../components/Column';
import Container from '../components/Container';
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
        <Test />
        <div className="m-y-4">
          <Anchor href="#">Anchor</Anchor>
          <Heading size={1}>Heading 1</Heading>
          <Heading size={2}>Heading 2</Heading>
          <Heading size={3}>Heading 3</Heading>
          <Heading size={4}>Heading 4</Heading>
          <Heading size={5}>Heading 5</Heading>
          <Heading size={6}>Heading 6</Heading>
          <Paragraph>Paragraph</Paragraph>
        </div>
        <Row mY={4}>
          <Column columnSize={[ 12, { '#': 6, }, ]} pY={3}>
            <div className="m-y-4">
              <Label htmlFor="a" mB={3}>Label</Label>
              <Input id="a" type="text" />
            </div>
            <div className="m-y-4">
              <Label htmlFor="b" mB={3}>Label</Label>
              <Input id="b" type="text" />
            </div>
          </Column>
          <Column columnSize={[ 12, { '#': 6, }, ]} pY={3}>
            <div className="m-y-4">
              <Label htmlFor="c" mB={3}>Label</Label>
              <Input id="c" type="text" />
            </div>
            <div className="m-y-4">
              <Button type="button">Button</Button>
            </div>
          </Column>
        </Row>
      </Container>
    );
  }

  template = template();
}

export default Playground;
