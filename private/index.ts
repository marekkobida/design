import Container from '@redred/pages/private/Container';

import pages from './pages';

const container = new Container(-1, 'design', pages);

if (typeof window !== 'undefined') {
  for (let i = 0; i < container.pages.length; i += 1) {
    const page = container.pages[i];

    try {
      page.toDOM();
    } catch (error) {

    }
  }
}

export default container;
