import Container from '@redredsk/pages/private/Container';

import Index from './pages/Index';

const container = new Container(-1, [Index]);

container.toDOM();

export default container;
