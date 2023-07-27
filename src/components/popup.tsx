import { FC } from 'react';
import { Card } from './cards';
import { CloseBtn } from '../components/svg-format-components';

interface PopupProps {
  condition: boolean;
  selectedCard: Card;
  onClose: () => void;
}

const Popup: FC<PopupProps> = ({ condition, selectedCard, onClose }) => {
  const closePopup = () => {
    onClose && onClose(); // Call the onClose function if it's provided
  };

  return (
    <div className={`popup-wrapper ${condition ? 'open' : ''}`}>
      <div className="popup-content">
        <button className="close-btn" onClick={closePopup}>
          <CloseBtn />
        </button>
        {selectedCard && (
          <div className="text-image-layout">
            <div className="image-layout-col">
              <img src={selectedCard.image} alt="popup-img" />
            </div>
            <div className="text-layout-col">
              <div className="d-flex ai-center jc-center h-100">
                <div className="left-text-spacing vertical-test-spacing">
                  <h5 className="popup-title title dark fw-bold">{selectedCard.title}</h5>
                  <p className="popup-text text dark fw-light">{selectedCard.completeText}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;