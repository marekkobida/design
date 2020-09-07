/*
 * Copyright 2020 Marek Kobida
 */

import React from 'react';

import Div from './html/Div';

class Modal extends React.Component {
  render () {
    return (
      <>
        <Div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            height: '100%',
            left: 0,
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 50,
          }}
        />
        <Div
          style={{
            height: '100%',
            left: 0,
            maxHeight: '100%',
            maxWidth: '100%',
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 100,
          }}
        >
          Ahoj
        </Div>
      </>
    );
  }
}

export default Modal;
