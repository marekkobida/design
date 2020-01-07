import React from 'react';

import TabsContext from './TabsContext';

interface R {
  Tabs: React.ContextType<typeof TabsContext>;
}

function withTabsContext<L extends R>(Component: React.ComponentType<L>) {
  return class WithTabsContext extends React.Component<Omit<L, keyof R>> {
    static displayName = `WithTabsContext(${Component.name})`;

    render() {
      return (
        <TabsContext.Consumer>
          {
            ($) => (
              <Component
                {...this.props as L}
                Tabs={$}
              />
            )
          }
        </TabsContext.Consumer>
      );
    }
  };
}

export default withTabsContext;
