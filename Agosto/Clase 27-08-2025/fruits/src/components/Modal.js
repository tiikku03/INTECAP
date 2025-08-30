function Modal({ fruit, onClose }) {
  return (
    <div className="modal-encima" onClick={onClose}>
      <div className="modal-cont" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <img src={fruit.imagen} alt={fruit.nombre} />
        <h2>{fruit.nombre}</h2>
        <p>{fruit.descripcion}</p>
        <p>Precio:Q {fruit.precio}</p>
      </div>
    </div>
  );
}
export default Modal;