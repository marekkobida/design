<h1 align="center">design</h1>
<p align="center">Copyright 2020 Marek Kobida</p>

## Obsah

1. [components](#components) `js`
1. [css](#css) `js`
1. [helpers](#helpers) `js`
1. [variables](./private/variables.json) `json`

---

### components

1. [Column](./private/components/Column.tsx)
1. [Container](./private/components/Container.tsx)
1. [Element](./private/components/Element.tsx)
1. [Heading](./private/components/Heading.tsx)
1. [Link](./private/components/Link.tsx)
1. [Row](./private/components/Row.tsx)
1. [Tabs](./private/components/Tabs.tsx)
   1. [TabsTab](./private/components/TabsTab.tsx)
1. [Text](./private/components/Text.tsx)

#### Príklad

```tsx
import React from 'react';
import { Column, Container, Row } from '@redred/design';

const components = (
  <Container>
    <Row>
      <Column>Left</Column>
      <Column>Right</Column>
    </Row>
  </Container>
);
```

---

### css

---

### helpers

1. [createClassName](./private/helpers/createClassName.ts)
1. [createResponsiveClassName](./private/helpers/createResponsiveClassName.ts)

---

### variables `json`

```ts
```
