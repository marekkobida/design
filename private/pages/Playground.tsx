import Page from '@redredsk/pages/private/Page';
import template from '@redredsk/pages/private/template';
import React from 'react';

import Column from '../components/Column';
import Container from '../components/Container';
import Row from '../components/Row';
import Test from '../components/Test';
import Anchor from '../htmlComponents/Anchor';
import Button from '../htmlComponents/Button';
import Div from '../htmlComponents/Div';
import Form from '../htmlComponents/Form';
import Heading from '../htmlComponents/Heading';
import Input from '../htmlComponents/Input';
import Label from '../htmlComponents/Label';
import Option from '../htmlComponents/Option';
import Paragraph from '../htmlComponents/Paragraph';
import Select from '../htmlComponents/Select';

class Playground extends Page {
  constructor () {
    super(-1, 'playground');
  }

  element () {
    return (
      <Container>
        <Test>
          {
            ($) => (
              <>
                <Heading headingSize={6} mB={2}>Heading 6</Heading>
                <Paragraph onClick={() => $('A')}>A</Paragraph>
                <Paragraph onClick={() => $('B')}>B</Paragraph>
              </>
            )
          }
        </Test>
        <Div mY={4}>
          <Anchor href="#">Anchor</Anchor>
          <Heading headingSize={1}>Heading 1</Heading>
          <Heading headingSize={2}>Heading 2</Heading>
          <Heading headingSize={3}>Heading 3</Heading>
          <Heading headingSize={4}>Heading 4</Heading>
          <Heading headingSize={5}>Heading 5</Heading>
          <Heading headingSize={6}>Heading 6</Heading>
          <Paragraph>Paragraph</Paragraph>
        </Div>
        <Div mY={4}>
          <Anchor className="button" href="#">Anchor</Anchor>
        </Div>
        <Div mY={4} textAlign="center">
          <Button type="button">Button</Button>
        </Div>
        <Div mY={4} textAlign="right">
          <Input className="button" type="button" value={'input[type="button"]'} />
        </Div>
        <Div mY={4} textAlign="center">
          <Input className="button" type="reset" value={'input[type="reset"]'} />
        </Div>
        <Div mY={4}>
          <Input className="button" type="submit" value={'input[type="submit"]'} />
        </Div>
        <Form mY={4}>
          <Row mT="!4">
            <Column mT={4} width="100">
              <Label htmlFor="a" mB={2}>Label</Label>
              <Input className="input" id="a" placeholder="Input" type="text" />
            </Column>
            <Column mT={4} width="100">
              <Label htmlFor="b" mB={2}>Label</Label>
              <Select id="b">
                <Option>Option</Option>
              </Select>
            </Column>
            <Column mT={4} width="6/12">
              <Label htmlFor="c" mB={2}>Label</Label>
              <Input className="input-checkbox" id="c" type="checkbox" />
            </Column>
            <Column mT={4} width="6/12">
              <Label htmlFor="d" mB={2}>Label</Label>
              <Input className="input-radio" id="d" type="radio" />
            </Column>
            <Column mT={4}>
              <Button type="button">Button</Button>
            </Column>
            <Column mL="auto" mT={4}>
              <Button type="button">Button</Button>
            </Column>
          </Row>
        </Form>
      </Container>
    );
  }

  template = template();
}

export default Playground;
