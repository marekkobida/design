import Container from '@redredsk/pages/private/Container';

import Playground from './Playground';

const container = new Container(-1, 'design', [ new Playground(), ]);

container.toDOM();

export default container;
