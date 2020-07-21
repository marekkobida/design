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
        <Row alignItems="end" flexDirection="row-reverse" justifyContent="end" mY={4}>
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
          <Anchor to="#">Anchor</Anchor>
          <Heading fontSize={1} textAlign="left">Heading 1</Heading>
          <Heading fontSize={2} textAlign="center">Heading 2</Heading>
          <Heading fontSize={3} textAlign="right">Heading 3</Heading>
          <Heading fontSize={4}>Heading 4</Heading>
          <Heading fontSize={5}>Heading 5</Heading>
          <Heading fontSize={6}>Heading 6</Heading>
          <Paragraph>Paragraph</Paragraph>
        </div>
        <Row mY={4}>
          <Column columnSize={[ 12, { '#': '#', }, ]} pY={2}>
            <div className="m-y-4">
              <Label htmlFor="left1" mB={2}>Left 1</Label>
              <Input id="left1" type="text" />
            </div>
            <div className="m-y-4">
              <Label htmlFor="left2" mB={2}>Left 2</Label>
              <Input id="left2" type="text" />
            </div>
          </Column>
          <Column columnSize={[ 12, { '#': '#', }, ]} pY={2}>
            <div className="m-y-4">
              <Label htmlFor="right" mB={2}>Right</Label>
              <Input id="right" type="text" />
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
