import React from 'react';

import decodeCommonParameters from '../helpers/decodeCommonParameters';

class DesignComponent<P = {}, S = {}> extends React.Component<Omit<P, 'className'> & Parameters<typeof decodeCommonParameters>[0], S> {
  decodedCommonParameters = decodeCommonParameters(this.props);
}

export default DesignComponent;
