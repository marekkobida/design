import React from 'react';

import createClassName from '../helpers/createClassName';

import Link from './Link';
import TabsContext from './TabsContext';
import withTabsContext from './withTabsContext';

interface P {
  Tabs: React.ContextType<typeof TabsContext>;
  active?: boolean;
  id: string;
}

class TabsTab extends React.Component<P & Omit<Link['props'], keyof P | 'to'>> {
  componentDidMount() {
    const { Tabs, active, id } = this.props;

    if (Tabs && Tabs.Tabs && active) {
      Tabs.Tabs.activeId = id;
    }
  }

  render() {
    const {
      Tabs, active, className, id, ...props
    } = this.props;

    const createdClassName = createClassName(
      'p-x-4 p-y-2 tab',
      { tab_active: Tabs && Tabs.Tabs && Tabs.Tabs.activeId ? Tabs.Tabs.activeId === id : !!active },
      className,
    );

    return (
      <Link
        {...props}
        className={createdClassName}
        onClick={(event) => { event.preventDefault(); if (Tabs) { Tabs.Tabs.activeId = id; } }}
        to="#"
      />
    );
  }
}

export default withTabsContext(TabsTab);
