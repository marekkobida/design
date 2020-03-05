import Container from '@redred/pages/private/Container';

import Test from './Test';

const container = new Container([ new Test(), ]);

container.toDOM();

export default container;
