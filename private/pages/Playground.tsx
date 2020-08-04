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
import Option from '../components/Option';
import Paragraph from '../components/Paragraph';
import Row from '../components/Row';
import Select from '../components/Select';
import TextArea from '../components/TextArea';

class Playground extends Page {
  constructor () {
    super(-1, 'playground');
  }

  element () {
    return (
      <Container>
        <Anchor href="#">Anchor</Anchor>
        <Heading headingSize={1}>Heading 1</Heading>
        <Heading headingSize={2}>Heading 2</Heading>
        <Heading headingSize={3}>Heading 3</Heading>
        <Heading headingSize={4}>Heading 4</Heading>
        <Heading headingSize={5}>Heading 5</Heading>
        <Heading headingSize={6}>Heading 6</Heading>
        <Paragraph>Paragraph</Paragraph>
        <Row>
          <Column columnSize={[ 12, { '#': 6, }, ]}>
            <Div mY={4}>
              <Label htmlFor="a" mB={2}>Label</Label>
              <Input id="a" placeholder="Input" type="text" />
            </Div>
            <Div mY={4}>
              <Row alignItems="center">
                <Column columnSize="width">
                  <Input id="b" type="radio" />
                </Column>
                <Column columnSize="width">
                  <Label htmlFor="b">Label</Label>
                </Column>
              </Row>
            </Div>
            <Div mY={4}>
              <Row alignItems="center">
                <Column columnSize="width">
                  <Input id="c" type="checkbox" />
                </Column>
                <Column columnSize="width">
                  <Label htmlFor="c">Label</Label>
                </Column>
              </Row>
            </Div>
          </Column>
          <Column columnSize={[ 12, { '#': 6, }, ]}>
            <Div mY={4}>
              <Label htmlFor="d" mB={2}>Label</Label>
              <Input id="d" placeholder="Input" type="text" />
            </Div>
            <Div mY={4}>
              <Label htmlFor="f" mB={2}>Label</Label>
              <Select id="f">
                <Option>Option</Option>
                <Option>Option</Option>
              </Select>
            </Div>
            <Div mY={4}>
              <Label htmlFor="g" mB={2}>Label</Label>
              <TextArea id="g" placeholder="TextArea" rows={3} />
            </Div>
            <Div mY={4}>
              <Input className="button" type="button" value={'[type="button"]'} />
            </Div>
            <Div mY={4} textAlign="center">
              <Input className="button" type="reset" value={'[type="reset"]'} />
            </Div>
            <Div mY={4} textAlign="right">
              <Input className="button" type="submit" value={'[type="submit"]'} />
            </Div>
            <Div mY={4} textAlign="center">
              <Button type="button">Button</Button>
            </Div>
            <Div mY={4}>
              <Anchor className="button" href="#">Anchor</Anchor>
            </Div>
          </Column>
        </Row>
      </Container>
    );
  }

  template = template();
}

export default Playground;
