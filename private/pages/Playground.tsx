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
import TextArea from '../htmlComponents/TextArea';

class Playground extends Page {
  constructor () {
    super(-1, 'playground');
  }

  element () {
    return (
      <Container>
        <Form mY={4}>
          <Label htmlFor="test" mB={2}>Label</Label>
          <Test className="input" id="test" placeholder="Input" test={(parameters) => JSON.stringify(parameters)} type="text">
            {
              (addParameter) => (
                <Div className="border" style={{ backgroundColor: '#fff', borderRadius: '0.125rem', }}>
                  <Row>
                    <Column width={[ '100', { '#': '6/12', }, ]}>
                      <Heading headingSize={6} pX={4} pY={2}>Name</Heading>
                      <Div onClick={() => addParameter('name', 'Marek Kobida', true)} pX={4} pY={2}>Marek Kobida</Div>
                      <Div onClick={() => addParameter('name', 'Peter Masár', true)} pX={4} pY={2}>Peter Masár</Div>
                    </Column>
                    <Column width={[ '100', { '#': '6/12', }, ]}>
                      <Heading headingSize={6} pX={4} pY={2}>Size</Heading>
                      <Div onClick={() => addParameter('size', 1)} pX={4} pY={2}>1</Div>
                      <Div onClick={() => addParameter('size', 2)} pX={4} pY={2}>2</Div>
                    </Column>
                  </Row>
                </Div>
              )
            }
          </Test>
          <Button mT={4} type="submit">Button</Button>
        </Form>
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
            <Column mT={4} width="100">
              <Label htmlFor="c" mB={2}>Label</Label>
              <TextArea id="c" placeholder="TextArea" rows={3} />
            </Column>
            <Column mT={4} width="6/12">
              <Label htmlFor="d" mB={2}>Label</Label>
              <Input className="input-checkbox" id="d" type="checkbox" />
            </Column>
            <Column mT={4} width="6/12">
              <Label htmlFor="e" mB={2}>Label</Label>
              <Input className="input-radio" id="e" type="radio" />
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
