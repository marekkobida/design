import React from 'react';

import Tabs from './Tabs';

const TabsContext = React.createContext<Partial<{ Tabs: Tabs }>>({});

export default TabsContext;
