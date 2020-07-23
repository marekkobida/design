import React from 'react';

import Column from '../../components/Column';
import Heading from '../../components/Heading';
import Input from '../../components/Input';
import Label from '../../components/Label';
import Row from '../../components/Row';
import { AlignItemsProperty, } from '../../helpers/decodeCommonParameters';

// TODO
class Test extends React.Component {
  render () {
    const alignItems: AlignItemsProperty[] = [
      'baseline',
      'center',
      'end',
      'flex-end',
      'flex-start',
      'normal',
      'self-end',
      'self-start',
      'start',
      'stretch',
    ];

    return (
      <Row mY={4}>
        <Column pY={2}>
          <Heading mY={2} size={6}>alignItems</Heading>
          {
            alignItems.map(($) => (
              <div className="align-items-center display-flex m-y-2" key={$}>
                <Input className="m-r-2" id={`align-items-${$}`} name="alignItems" type="radio" value={`align-items-${$}`} />
                <Label htmlFor={`align-items-${$}`}>{$}</Label>
              </div>
            ))
          }
        </Column>
      </Row>
    );
  }
}

export default Test;
