import Page from '@redredsk/pages/private/Page';
import template from '@redredsk/pages/private/template';
import React from 'react';

import Column from '../components/Column';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Link from '../components/Link';
import Row from '../components/Row';
import Text from '../components/Text';

import css from './Playground.css';

class Test extends React.Component<{ size: 1 | 2 | 3 | 4 | 5 | 6; }> {
  render () {
    const { size, ...props } = this.props;

    return <div {...props} className={[ `border p-${size}`, css.test, ]} />;
  }
}

class Playground extends Page {
  constructor () {
    super(-1, 'Playground');
  }

  element () {
    return (
      <Container>
        <Row alignItems="#" className="m-y-4" justifyContent="#">
          <Column size="width">
            <Test size={4}>Column 1</Test>
          </Column>
          <Column size="width">
            <Test size={2}>Column 2</Test>
          </Column>
        </Row>
        <Row alignItems="end" className="m-y-4" flexDirection="row-reverse" justifyContent="end">
          <Column size="width">
            <Test size={4}>Column 1</Test>
          </Column>
          <Column size="width">
            <Test size={2}>Column 2</Test>
          </Column>
        </Row>
        <Row className="m-y-4">
          <Column>
            <Test size={2}>1</Test>
          </Column>
          <Column>
            <Test size={2}>2</Test>
          </Column>
          <Column>
            <Test size={2}>3</Test>
          </Column>
          <Column>
            <Test size={2}>4</Test>
          </Column>
          <Column>
            <Test size={2}>5</Test>
          </Column>
          <Column>
            <Test size={2}>6</Test>
          </Column>
          <Column>
            <Test size={2}>7</Test>
          </Column>
          <Column>
            <Test size={2}>8</Test>
          </Column>
          <Column>
            <Test size={2}>9</Test>
          </Column>
          <Column>
            <Test size={2}>10</Test>
          </Column>
          <Column>
            <Test size={2}>11</Test>
          </Column>
          <Column>
            <Test size={2}>12</Test>
          </Column>
        </Row>
        <Row className="m-y-4">
          <Column size="#">
            <Test size={2}>Column</Test>
          </Column>
        </Row>
        <Row className="m-y-4">
          <Column offset={2} size={8}>
            <Test size={2}>Column</Test>
          </Column>
        </Row>
        <Row className="m-y-4">
          <Column size="width">
            <Test size={2}>Column</Test>
          </Column>
        </Row>
        <div className="m-y-4">
          <Heading textSize={1}>Heading</Heading>
          <Heading textSize={2}>Heading</Heading>
          <Heading textSize={3}>Heading</Heading>
          <Heading textSize={4}>Heading</Heading>
          <Heading textSize={5}>Heading</Heading>
          <Heading textSize={6}>Heading</Heading>
          <Link to="#">Link</Link>
          <Text data-test="ahoj" mB={2} mT={4} className="lol p-2">Text</Text>
        </div>
      </Container>
    );
  }

  template = template();
}

export default Playground;
