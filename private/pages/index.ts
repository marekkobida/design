import Container from '@redredsk/pages/private/Container';
import Test from './Test';

const container = new Container(-1, 'design', [ new Test(), ]);

container.toDOM();

export default container;
