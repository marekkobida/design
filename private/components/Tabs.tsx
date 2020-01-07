import React from 'react';

import createClassName from '../helpers/createClassName';

import Element from './Element';
import TabsContext from './TabsContext';

interface P {
  onActivation: ($: { activeId: S['activeId'] }) => void;
}

interface S {
  activeId: null | string;
}

class Tabs extends React.Component<P & Omit<Element['props'], keyof P>> {
  state = { activeId: null };

  get activeId() {
    const { activeId } = this.state;

    return activeId;
  }

  set activeId(id: S['activeId']) {
    const { onActivation } = this.props;

    onActivation({ activeId: id });

    this.setState(() => ({ activeId: id }));
  }

  render() {
    const { className, onActivation, ...props } = this.props;

    const createdClassName = createClassName('flex flex_justify-content_#', className);

    return (
      <TabsContext.Provider value={{ Tabs: this }}>
        <Element {...props} className={createdClassName} />
      </TabsContext.Provider>
    );
  }
}

export default Tabs;
