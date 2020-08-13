
import React, { ReactEventHandler, } from 'react';
import ReactDOM from 'react-dom';
import { useState, } from 'react';

//
type P = {
  index: Number,
  isShowing: boolean;
  hide: React.EventHandler<any>;
  content: any; /* komponent alebo array stringov pr eimg gla */

}


const ModalGallery = (images: Array<string>, index: Number) => {
  const [ count, setCount, ] = useState(0);
  const [ mode, setMode, ] = useState(false);

  let selectedImg = index || count;
  // Min/Max
  if (selectedImg < 0) { selectedImg = 0; }
  if (selectedImg >= images.length) { selectedImg = images.length - 1; }

  return (<>
    {
      <div
        onClick={()=>{
          setCount(selectedImg = (selectedImg == images.length - 1) ? 0 : selectedImg + 1);
        }}
        style={{
          backgroundImage: 'url(' + images[selectedImg] + ')',
          backgroundSize: mode ? 'cover' : 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          width: '30vw',
          height: '30vh',
        }} />
    }

    <div>IMG COUNTER: {selectedImg + 1}/{images.length}</div>
    <div onClick={()=>{ setMode(!mode); }}>ZOOM </div>

    <span onClick={()=>{ setCount(selectedImg - 1); }}>{' [<] '}</span>
    <span onClick={()=>{ setCount(selectedImg + 1); }}>{' [>] '}</span>

  </>);
};


const Modal = ({ content, isShowing, hide, index, }:P) => isShowing
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


            { // zobrazi priamo alebo galeriu ak je to array
              Array.isArray(content)
                ? ModalGallery(content, index)
                : content}


          </div>

        </div>
      </div>
    </React.Fragment>, document.body
  )
  : null;

export default Modal;
