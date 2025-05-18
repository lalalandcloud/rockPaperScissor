import './modal.css'
import imgModal from '../../assets/images/image-rules.svg'

function Modal({show, onClose,children}){
    const imgRules = imgModal
    if (!show) return null;


    return(
        <div className='modal-overlay' onClick={onClose}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                <h1>RULES</h1>
                <img src={imgRules} alt="" />
                <button className='close-btn' onClick={onClose}>
                    ✕
                </button>
                {children}
            </div>
        </div>
    );
}

export default Modal;