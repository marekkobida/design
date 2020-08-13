import Container from '@redredsk/pages/private/Container';

import Playground from './Playground';
import PlaygroundModal from './PlaygroundModal';

const container = new Container(-1, 'design', [

  new Playground(),
  new PlaygroundModal(),

]);

container.toDOM();

export default container;
