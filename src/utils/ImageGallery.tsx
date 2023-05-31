import React, { useState, useEffect  } from 'react';
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


  
/*   const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  }; */

  const handleImageLoad = () => {
    setLoadedImageCount((prevCount) => prevCount + 1);
  };

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
    /* setTimeout(() => {
      setIsLoading(false);
    }, 4000); */
    console.log("handling")
    if (loadedImageCount === images.length) {

      setIsLoading(false);
    }
  }, [loadedImageCount, images.length]);



  return (
    <>
       <div className="image-gallery">
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
    </>
  );
};

export default ImageGallery;






