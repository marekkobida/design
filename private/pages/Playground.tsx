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
import Table from '../htmlComponents/Table';
import TableCell from '../htmlComponents/TableCell';
import TableHeaderCell from '../htmlComponents/TableHeaderCell';
import TableRow from '../htmlComponents/TableRow';
import TextArea from '../htmlComponents/TextArea';
import variables from '../variables.json';

class Playground extends Page {
  constructor () {
    super(-1, 'playground');
  }

  element () {
    return (
      <Container>
        <Table mY={4}>
          <TableRow>
            <TableHeaderCell>name</TableHeaderCell>
            <TableHeaderCell>value</TableHeaderCell>
          </TableRow>
          {
            variables[':root'].map((variable) => (
              <TableRow key={variable.name}>
                <TableCell>{variable.name}</TableCell>
                <TableCell>{variable.value}</TableCell>
              </TableRow>
            ))
          }
        </Table>
        <Table mY={4}>
          <TableRow>
            <TableHeaderCell>name</TableHeaderCell>
            <TableHeaderCell>size (rem)</TableHeaderCell>
            <TableHeaderCell>size (px)</TableHeaderCell>
          </TableRow>
          {
            variables.breakpoints.map((breakpoint) => breakpoint && (
              <TableRow key={breakpoint.name}>
                <TableCell>{breakpoint.name}</TableCell>
                <TableCell>{breakpoint.size}</TableCell>
                <TableCell>{breakpoint.size * 16}</TableCell>
              </TableRow>
            ))
          }
        </Table>
        <Table mY={4}>
          <TableRow>
            <TableHeaderCell>name</TableHeaderCell>
            <TableHeaderCell>size (rem)</TableHeaderCell>
            <TableHeaderCell>size (px)</TableHeaderCell>
          </TableRow>
          {
            variables.sizes.map((size) => (
              <TableRow key={size.name}>
                <TableCell>{size.name}</TableCell>
                <TableCell>{size.size}</TableCell>
                <TableCell>{size.size * 16}</TableCell>
              </TableRow>
            ))
          }
        </Table>
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
          <Button type="button">Button</Button>
        </Div>
        <Div mY={4} textAlign="center">
          <Input className="button" type="button" value={'input[type="button"]'} />
        </Div>
        <Div mY={4} textAlign="right">
          <Input className="button" type="reset" value={'input[type="reset"]'} />
        </Div>
        <Div mY={4} textAlign="center">
          <Input className="button" type="submit" value={'input[type="submit"]'} />
        </Div>
        <Form mY={4}>
          <Row mT="!4">
            <Column mT={4} width="100">
              <Label htmlFor="a" mB={2}>Label</Label>
              <Input id="a" name="a" placeholder="Input" type="text" />
            </Column>
            <Column mT={4} width="100">
              <Label htmlFor="b" mB={2}>Label</Label>
              <Select defaultValue="Select" id="b" name="b">
                <Option disabled>Select</Option>
                <Option>Option</Option>
              </Select>
            </Column>
            <Column mT={4} width="100">
              <Label htmlFor="c" mB={2}>Label</Label>
              <TextArea id="c" name="c" placeholder="TextArea" rows={3} />
            </Column>
            <Column mT={4} width="100">
              <Label htmlFor="d" mB={2}>Label</Label>
              <Test id="d" placeholder="Input" test={(parameters) => parameters.length > 0 ? JSON.stringify(parameters) : ''} type="text">
                {
                  (addParameter) => (
                    <Div p={2}>
                      <Div className="border border-radius" style={{ backgroundColor: 'rgb(var(--input--background-color))', }}>
                        <Row>
                          <Column width={[ '100', { '#': '6/12', }, ]}>
                            <Heading headingSize={6} pX={4} pY={2}>Left</Heading>
                            <Div onClick={() => addParameter('left', 'Marek Kobida', true)} pX={4} pY={2}>Marek Kobida</Div>
                            <Div onClick={() => addParameter('left', 'Peter Masár', true)} pX={4} pY={2}>Peter Masár</Div>
                          </Column>
                          <Column width={[ '100', { '#': '6/12', }, ]}>
                            <Heading headingSize={6} pX={4} pY={2}>Right</Heading>
                            <Div onClick={() => addParameter('right', 1)} pX={4} pY={2}>1</Div>
                            <Div onClick={() => addParameter('right', 2)} pX={4} pY={2}>2</Div>
                          </Column>
                        </Row>
                      </Div>
                    </Div>
                  )
                }
              </Test>
            </Column>
            <Column mT={4} width={[ '100', { '#': '6/12', }, ]}>
              <Label htmlFor="e" mB={2}>Label</Label>
              <Input id="e" name="e" type="checkbox" />
            </Column>
            <Column mT={4} width={[ '100', { '#': '6/12', }, ]}>
              <Label htmlFor="f" mB={2}>Label</Label>
              <Input id="f" name="f" type="radio" />
            </Column>
            <Column mT={4} width="100">
              <Button type="submit">Button</Button>
            </Column>
          </Row>
        </Form>
      </Container>
    );
  }

  template = template();
}

export default Playground;
