import Container from '@redredsk/pages/private/Container';

import Playground from './Playground';
import SignUp from './SignUp';

const container = new Container(
  -1,
  'design',
  [
    new Playground(),
    new SignUp(),
  ]
);

container.toDOM();

export default container;
