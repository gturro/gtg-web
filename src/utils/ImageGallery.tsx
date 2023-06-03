import React, { useState, useEffect, useRef  } from 'react';
import Skeleton from '@mui/material/Skeleton';
import './ImageGallery.css';


interface ImageGalleryProps {
  folderName: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ folderName }) => {

  const [images, setImages] = useState<string[]>([]);
/*   const [isModalOpen, setIsModalOpen] = useState(false); */
  const [loadedImageCount, setLoadedImageCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const galleryRef = useRef<HTMLDivElement>(null);

  
/*   const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  }; */



  useEffect(() => {
    const importImages = async () => {
      let imageFiles;

      switch (folderName) {
        case "row1": 
          imageFiles = import.meta.glob(`../assets/img/row1/*.(png|jpeg|svg|gif)`);
          break;
        case "row2": 
          imageFiles = import.meta.glob(`../assets/img/row2/*.(png|jpeg|svg|gif)`);
          break;
        case "row3": 
          imageFiles = import.meta.glob(`../assets/img/row3/*.(png|jpeg|svg|gif)`);
          break;
        case "project1":
          imageFiles = import.meta.glob(`../assets/img/project1/*.(png|jpeg|svg|gif)`);
          break;
        case "project2":
          imageFiles = import.meta.glob(`../assets/img/project2/*.(png|jpeg|svg|gif)`);
          break;
        case "project3":
          imageFiles = import.meta.glob(`../assets/img/project3/*.(png|jpeg|svg|gif)`);
          break;
        case "project4":
          imageFiles = import.meta.glob(`../assets/img/project4/*.(png|jpeg|svg|gif)`);
          break;
        default:
          imageFiles = import.meta.glob(`../assets/img/default/*.(png|jpeg|svg|gif)`);
      }
      const importedImages = await Promise.all(Object.values(imageFiles).map((file) => file()));
      const imagePaths = importedImages.map((image: any) => image.default);
      setImages(imagePaths);
    };

    importImages();
  }, [folderName]);

  useEffect(() => {
    if (loadedImageCount > 0 && loadedImageCount === images.length) {
      setIsLoading(false);
    }
  }, [images.length, loadedImageCount]);

  const handleImageLoad = () => {
    setLoadedImageCount((prevCount) => prevCount + 1);
  };

  

  return (
    <div className='image-gallery-container'>
       <div className="image-gallery" ref={galleryRef}>
        {images.map((img, index) => (
          <div key={`image-container-${index}`} className="image-container">
            {isLoading && 
            <div className='skeleton-container'>
              <Skeleton variant="rectangular" animation="wave" />
            </div>
            }
            <img
              src={img}
              alt={`Image ${index}`}
              className={`image ${isLoading ? 'hidden' : ''}`}
              onLoad={handleImageLoad}
            />
          </div>
        ))}
      </div>
      {/* <ImageCarouselModal images={images} isOpen={isModalOpen} onClose={closeModal} /> */}
    </div>
  );
};

export default ImageGallery;






