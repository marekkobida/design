import Page from '@redredsk/pages/private/Page';
import template from '@redredsk/pages/private/template';
import React from 'react';

import Anchor from '../components/Anchor';
import Column from '../components/Column';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Input from '../components/Input';
import Label from '../components/Label';
import Paragraph from '../components/Paragraph';
import Row from '../components/Row';

import css from './Playground.css';

class Playground extends Page {
  constructor () {
    super(-1, 'Playground');
  }

  element () {
    return (
      <Container>
        <Row alignItems="center" className={[ 'border', css.test__row, ]} justifyContent="center" mY={4}>
          <Column className="border" columnSize="width" pY={2}>Column 1</Column>
          <Column className="border" columnSize="width" pY={4}>Column 2</Column>
        </Row>
        <Row alignItems="end" className={[ 'border', css.test__row, ]} flexDirection="row-reverse" justifyContent="end" mY={4}>
          <Column className="border" columnSize="width" pY={2}>Column 1</Column>
          <Column className="border" columnSize="width" pY={4}>Column 2</Column>
        </Row>
        <Row className={[ 'border', css.test__row, ]} flexDirection={[ 'column', { '#': 'row', }, ]} mY={4}>
          <Column className="border" pY={2}>1</Column>
          <Column className="border" pY={2}>2</Column>
          <Column className="border" pY={2}>3</Column>
          <Column className="border" pY={2}>4</Column>
          <Column className="border" pY={2}>5</Column>
          <Column className="border" pY={2}>6</Column>
          <Column className="border" pY={2}>7</Column>
          <Column className="border" pY={2}>8</Column>
          <Column className="border" pY={2}>9</Column>
          <Column className="border" pY={2}>10</Column>
          <Column className="border" pY={2}>11</Column>
          <Column className="border" pY={2}>12</Column>
        </Row>
        <Row alignItems="center" className={[ 'border', css.test__row, ]} mY={4}>
          <Column className="border" columnOffset={1} columnSize={4} pY={2}>Column 1</Column>
          <Column className="border" columnOffset={2} columnSize={4} pY={4}>Column 2</Column>
        </Row>
        <div className="m-y-4">
          <Heading fontSize={1} textAlign="left">Heading</Heading>
          <Heading fontSize={2} textAlign="center">Heading</Heading>
          <Heading fontSize={3} textAlign="right">Heading</Heading>
          <Heading fontSize={4}>Heading</Heading>
          <Heading fontSize={5}>Heading</Heading>
          <Heading fontSize={6}>Heading</Heading>
          <Anchor to="#">Link</Anchor>
          <Paragraph>Text</Paragraph>
        </div>
        <Row className={[ 'border', css.test__row, ]} mY={4}>
          <Column className="border" columnSize={[ 12, { '#': '#', }, ]} pY={2}>
            <div className="m-y-4">
              <Label htmlFor="left1" mB={2}>Left 1</Label>
              <Input id="left1" type="text" />
            </div>
            <div className="m-y-4">
              <Label htmlFor="left2" mB={2}>Left 2</Label>
              <Input id="left2" type="text" />
            </div>
          </Column>
          <Column className="border" columnSize={[ 12, { '#': '#', }, ]} pY={2}>
            <div className="m-y-4">
              <Label htmlFor="right" mB={2}>Right</Label>
              <Input id="right" type="text" />
            </div>
          </Column>
        </Row>
      </Container>
    );
  }

  template = template();
}

export default Playground;
