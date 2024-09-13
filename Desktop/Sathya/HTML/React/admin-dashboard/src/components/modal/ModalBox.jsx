import React, { useState } from 'react'
import ModalPage from './ModalPage';
import './ModalPage.css'

const ModalBox = () => {
    const [modal,setModal] = useState(false);
    const toggleModal = ()=>setModal(!modal);
  return (
    <div className='container m-5 '>
        <button className='btn btn-primary' onClick={toggleModal}>Login</button>
        {modal && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={toggleModal}>X</button>
            <ModalPage />
          </div>
        </div>
      )}
    </div>
  )
}

export default ModalBox