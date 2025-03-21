import React from 'react';
import './ConfirmModal.css';

function ConfirmModal({ isOpen, onCancel, onConfirm, title, message }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{title}</h3>
        <p>{message}</p>
        <div className="modal-actions">
          <button className="btn cancel-btn" onClick={onCancel}>
            Annuler
          </button>
          <button className="btn confirm-btn" onClick={onConfirm}>
            Confirmer
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
