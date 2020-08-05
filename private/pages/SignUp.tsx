import Page from '@redredsk/pages/private/Page';
import template from '@redredsk/pages/private/template';
import React from 'react';

import Button from '../components/Button';
import Column from '../components/Column';
import Container from '../components/Container';
import Div from '../components/Div';
import Form from '../components/Form';
import Heading from '../components/Heading';
import Input from '../components/Input';
import Label from '../components/Label';
import Option from '../components/Option';
import Row from '../components/Row';
import Select from '../components/Select';
import TextArea from '../components/TextArea';

class SignUp extends Page {
  constructor () {
    super(-1, 'sign-up');
  }

  element () {
    return (
      <Container>
        <Div pY={8} textAlign="center">
          <Heading headingSize={1}>Sign Up</Heading>
        </Div>
        <Form className="row" style={{ '--y': '1.5rem', }}>
          <Column columnSize={[ 12, { '#': 6, }, ]}>
            <Label htmlFor="name" mB={2}>Name</Label>
            <Input className="input" id="name" placeholder="Marek Kobida" type="text" />
          </Column>
          <Column columnSize={[ 12, { '#': 6, }, ]}>
            <Label htmlFor="phone" mB={2}>Phone</Label>
            <Input className="input" id="phone" placeholder="+421 910 123 678" type="tel" />
          </Column>
          <Column columnSize={12}>
            <Label htmlFor="address" mB={2}>Address</Label>
            <Input className="input" id="address" placeholder="D. Jurkoviča 2407/24" type="text" />
          </Column>
          <Column columnSize={12}>
            <Label htmlFor="test-a" mB={2}>Country</Label>
            <Select id="test-a">
              <Option>Slovakia</Option>
            </Select>
          </Column>
          <Column columnSize={12}>
            <Label htmlFor="test-b" mB={2}>Test B</Label>
            <TextArea id="test-b" rows={3} />
          </Column>
          <Column columnSize={12}>
            <Row alignItems="center" mB={2}>
              <Column columnSize="width">
                <Input className="input-radio" id="test-c" type="radio" />
              </Column>
              <Column columnSize="width">
                <Label htmlFor="test-c">Test C</Label>
              </Column>
            </Row>
            <Row alignItems="center">
              <Column columnSize="width">
                <Input className="input-checkbox" id="test-d" type="checkbox" />
              </Column>
              <Column columnSize="width">
                <Label htmlFor="test-d">Test D</Label>
              </Column>
            </Row>
          </Column>
          <Column columnSize={12}>
            <Row>
              <Column>
                <Button type="button">Left</Button>
              </Column>
              <Column columnSize="width" mL="#">
                <Button type="reset">Right</Button>
              </Column>
            </Row>
          </Column>
        </Form>
      </Container>
    );
  }

  template = template();
}

export default SignUp;
