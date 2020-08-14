
import React, { ReactEventHandler, } from 'react';
import ReactDOM from 'react-dom';
import { useState, } from 'react';

//
type P = {
  index?: Number,
  isShowing: boolean,
  hide: React.EventHandler<any>,
  children: object,
}


// eslint-disable-next-line func-style
const modalGallery = (images: Array<string>, index: Number) => {
  const [ count, setCount, ] = useState(0);
  const [ mode, setMode, ] = useState(false);

  let selectedImg = index || count;
  // Min/Max
  if (selectedImg < 0) { selectedImg = 0; }
  if (selectedImg >= images.length) { selectedImg = images.length - 1; }

  const imgUrl = 'https://koala.sk' + images[selectedImg].thmb; /* pre iny rozmer replacnut FormatID */
  return (<>
    {
      <div
        onClick={()=>{
          setCount(selectedImg = (selectedImg == images.length - 1) ? 0 : selectedImg + 1);
        }}
        style={{
          backgroundImage: 'url(' + imgUrl + ')',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: mode ? 'contain' : 'cover',
          height: '30vh',
          width: '80vw',
        }} />
    }
    {images[selectedImg].alt && images[selectedImg].alt.length > 2
      ? <div style={{ fontWeight: '700', }}>Popis: {images[selectedImg].alt}</div>
      : <div style={{ fontWeight: '700', }}>Bez popisu fotky</div>}

    <div style={{ color: 'red', }}>{  JSON.stringify(images[selectedImg]) }</div>
    <div>IMG COUNTER: {selectedImg + 1}/{images.length}</div>


    <div onClick={()=>{ setMode(!mode); }}>ZOOM </div>

    <span onClick={()=>{ setCount(selectedImg - 1); }}>{' [<] '}</span>
    <span onClick={()=>{ setCount(selectedImg + 1); }}>{' [>] '}</span>

  </>);
};


// eslint-disable-next-line func-style
const Modal = ({ children,  isShowing, hide, index, }:P) =>{
  return isShowing
    ? ReactDOM.createPortal(<React.Fragment>
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
          display: 'block',
          position: 'fixed',
          top: '30px',
          left: '50%',
          background: '#FFF',
          transform: 'translateX(-50%)',
          zIndex: 92,
        }}
        role="dialog"
      >
        <div className="modal">
          <div className="modal-header">
            <button type="button"
              className="modal-close-button" data-dismiss="modal" aria-label="Zavrieť"
              onClick={hide}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            { /* zobrazi priamo alebo galeriu ak je to array */
              Array.isArray(children) && children.length > 0 && typeof (children[0]) === 'object'
              && children[0].hasOwnProperty('id')
                ? modalGallery(children, index)
                : children}
          </div>
        </div>
      </div>
    </React.Fragment>, document.body)
    : null;
};

export default Modal;
