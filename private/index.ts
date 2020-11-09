/*
 * Copyright 2020 Marek Kobida
 */

import Container from '@redredsk/pages/private/Container';
import Index from './pages';

const container = new Container(-1, [Index]);

container.toDOM();

export default container;
