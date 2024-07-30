
import React, { useState } from 'react';
import Modal from './components/Modal';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  return (
    <div>
        {/* Do not remove the main div */}
        
      <button onClick={handleOpenModal}>Show Modal</button>
      <Modal show={showModal} onClose={handleCloseModal}>
        <p className="model-p">This is the content of the modal</p>
      </Modal>
    
    </div>
  )
}

export default App
