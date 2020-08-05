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
import Row from '../components/Row';
import TextArea from '../components/TextArea';

class CollectionWindow extends React.Component<{ id?: string; }> {
  render () {
    return (
      <>
        <Heading headingSize={2} mB={4}>{this.props.id ? 'Edit Collection' : 'Create Collection'}</Heading>
        <Form className="row" style={{ '--y': '1.5rem', }}>
          <Column columnSize={12}>
            <Label htmlFor="name" mB={2}>Name</Label>
            <Input className="input" id="name" placeholder="Marek Kobida" type="text" />
          </Column>
          <Column columnSize={12}>
            <Label htmlFor="description" mB={2}>Description</Label>
            <TextArea id="description" rows={3} />
          </Column>
          <Column columnSize={12}>
            <Row>
              <Column>
                <Row alignItems="center">
                  <Column columnSize="width">
                    <Input className="input-checkbox" id="isPrivate" type="checkbox" />
                  </Column>
                  <Column columnSize="width">
                    <Label htmlFor="isPrivate">private</Label>
                  </Column>
                </Row>
              </Column>
              <Column columnSize="width" mL="#">
                <Button type="button">{this.props.id ? 'Edit' : 'Create'}</Button>
              </Column>
            </Row>
          </Column>
        </Form>
      </>
    );
  }
}

class SignUp extends Page {
  constructor () {
    super(-1, 'sign-up');
  }

  element () {
    return (
      <Container>
        <Div className="border" p={4}>
          <CollectionWindow />
        </Div>
        <Div className="border" p={4}>
          <CollectionWindow id="1" />
        </Div>
      </Container>
    );
  }

  template = template();
}

export default SignUp;
