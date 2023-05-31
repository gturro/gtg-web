import React, { useState } from 'react';
import './ImageCarouselModal.css'

interface ImageCarouselModalProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
}

const ImageCarouselModal: React.FC<ImageCarouselModalProps> = ({ images, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      {isOpen && (
        <div className="gallery-modal">
          <div className="modal-content">
            <span className="close" onClick={onClose}>&times;</span>
            <img src={images[currentImageIndex]} alt="Carousel Image" className="carousel-image" />
            <div className="carousel-navigation">
              <button className="previous-button" onClick={handlePrevious}>
                Previous
              </button>
              <button className="next-button" onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageCarouselModal;
