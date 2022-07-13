
const Modal = ({ setOpenModal }) => {

    const handleModalClick = () => {

        setOpenModal(false);
    }

    return (
        <div className="modal">
            <div className="modalContent">
                <h2>How to play</h2>
                <button 
                    className="exit"
                    onClick={handleModalClick}
                >X</button>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse dolorem distinctio dicta nostrum. Illum fugit asperiores similique perspiciatis alias assumenda sit optio at qui pariatur quaerat voluptatum doloremque laborum possimus dolorum necessitatibus hic, laudantium debitis nobis nihil? Nisi at a velit deserunt ipsa, modi ducimus? Nulla temporibus provident dolore labore!</p>
            </div>
        </div>
    );
};

export default Modal;
