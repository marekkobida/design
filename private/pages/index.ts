import Container from '@redred/pages/private/Container';

import Test from './Test';

const container = new Container([ new Test(), ]);

if (typeof window !== 'undefined') {
  for (let i = 0; i < container.pages.length; i += 1) {
    const page = container.pages[i];

    page.toDOM();
  }
}

export default container;
