function Modal({accesorio, onClose}){
    return(
        <div className="modal-encima" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>Cerrar</button>

                <img className="img-accesorio" src={accesorio.imagen} alt={accesorio.nombre} />
                <h3 className="title">{accesorio.nombre}</h3>
                <p className="description">{accesorio.descripcion}</p>
                <p className="description">{accesorio.descripcion2}</p>
                <p className="price">Precio: ${accesorio.precio}</p>
                
            </div>
        </div>
    )
}
export default Modal;