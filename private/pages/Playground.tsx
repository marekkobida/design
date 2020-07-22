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

console.log(css);

class Playground extends Page {
  constructor () {
    super(-1, 'playground');
  }

  element () {
    return (
      <Container>
        <Row alignItems="center" justifyContent="center" mY={4}>
          <Column columnSize="width" pY={2}>Column 1</Column>
          <Column columnSize="width" pY={4}>Column 2</Column>
        </Row>
        <Row alignItems="flex-end" flexDirection="row-reverse" justifyContent="flex-end" mY={4}>
          <Column columnSize="width" pY={2}>Column 1</Column>
          <Column columnSize="width" pY={4}>Column 2</Column>
        </Row>
        <Row flexDirection={[ 'column', { '#': 'row', }, ]} mY={4}>
          <Column pY={2}>1</Column>
          <Column pY={2}>2</Column>
          <Column pY={2}>3</Column>
          <Column pY={2}>4</Column>
          <Column pY={2}>5</Column>
          <Column pY={2}>6</Column>
          <Column pY={2}>7</Column>
          <Column pY={2}>8</Column>
          <Column pY={2}>9</Column>
          <Column pY={2}>10</Column>
          <Column pY={2}>11</Column>
          <Column pY={2}>12</Column>
        </Row>
        <Row alignItems="center" mY={4}>
          <Column columnOffset={1} columnSize={4} pY={2}>Column 1</Column>
          <Column columnOffset={2} columnSize={4} pY={4}>Column 2</Column>
        </Row>
        <div className="m-y-4">
          <Anchor href="#">Anchor</Anchor>
          <Heading size={1} textAlign="left">Heading 1</Heading>
          <Heading size={2} textAlign="center">Heading 2</Heading>
          <Heading size={3} textAlign="right">Heading 3</Heading>
          <Heading size={4}>Heading 4</Heading>
          <Heading size={5}>Heading 5</Heading>
          <Heading size={6}>Heading 6</Heading>
          <Paragraph>Paragraph</Paragraph>
        </div>
        <Row mY={4}>
          <Column columnSize={[ 12, { '#': '#', }, ]} pY={2}>
            <div className="m-y-4">
              <Label htmlFor="a" mB={2}>Label</Label>
              <Input id="a" type="text" />
            </div>
            <div className="m-y-4">
              <Label htmlFor="b" mB={2}>Label</Label>
              <Input id="b" type="text" />
            </div>
          </Column>
          <Column columnSize={[ 12, { '#': '#', }, ]} pY={2}>
            <div className="m-y-4">
              <Label htmlFor="c" mB={2}>Label</Label>
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
