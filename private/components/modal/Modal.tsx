
import React, { ReactEventHandler, } from 'react';
import ReactDOM from 'react-dom';

//
type P = {
  isShowing: any;
  hide: React.EventHandler<any>;
  content: any;
  avoidBlur: any;
}

const Modal = ({ content, isShowing, hide,  }:P) => isShowing
  ? ReactDOM.createPortal(
    <React.Fragment>
      <div
        className="modal-overlay"
        onClick={hide}
        style={{
          background: 'rgba(0,0,0,0.1)',
          bottom: '0',
          left: '0',
          position: 'fixed',
          top: '0',
          width: '100%',
          zIndex: 91,
        }}
      />
      <div
        className="modal-wrapper"
        aria-modal
        aria-hidden

        tabIndex={-1}
        style={{
          background: '#CCC',
          padding: '20px',
          display: 'block',
          position: 'fixed',
          top: '30px',
          left: '50%',
          maxWidth: '90%',
          background: '#FFF',
          transform: 'translateX(-50%)',
          zIndex: '91',
        }}
        role="dialog"
      >
        <div className="modal">
          <div className="modal-header">
            <button
              type="button"
              className="modal-close-button"
              data-dismiss="modal"
              aria-label="Zavrieť"
              onClick={hide}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {content}
          </div>

        </div>
      </div>
    </React.Fragment>, document.body
  )
  : null;

export default Modal;
