import React from 'react';

import createClassName, { ClassName, } from '../helpers/createClassName';

import TabsContext from './TabsContext';

interface P {
  className?: ClassName | ClassName[];
  onActivation: ($: { activeId: S['activeId'] }) => void;
}

interface S {
  activeId: null | string;
}

class Tabs extends React.Component<P> {
  state = { activeId: null, };

  get activeId () {
    const { activeId, } = this.state;

    return activeId;
  }

  set activeId (id: S['activeId']) {
    const { onActivation, } = this.props;

    onActivation({ activeId: id, });

    this.setState(() => ({ activeId: id, }));
  }

  render () {
    const { className, onActivation, ...props } = this.props;

    const createdClassName = createClassName('flex flex_justify-content_#', className);

    return (
      <TabsContext.Provider value={{ Tabs: this, }}>
        <div {...props} className={createdClassName} />
      </TabsContext.Provider>
    );
  }
}

export default Tabs;
