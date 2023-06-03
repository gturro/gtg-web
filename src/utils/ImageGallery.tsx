import React, { useState, useEffect, useRef  } from 'react';
import Skeleton from '@mui/material/Skeleton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './ImageGallery.css';


interface ImageGalleryProps {
  folderName: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ folderName }) => {

  const [images, setImages] = useState<string[]>([]);
/*   const [isModalOpen, setIsModalOpen] = useState(false); */
  const [loadedImageCount, setLoadedImageCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [initialClickX, setInitialClickX] = useState(0);
  const [initialScrollLeft, setInitialScrollLeft] = useState(0);
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

  useEffect(() => {
    const handleResize = () => {
      if (galleryRef.current) {
        setContainerWidth(galleryRef.current.offsetWidth);
      }
    };
  
    window.addEventListener('resize', handleResize);
    handleResize();
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollLeft } = event.currentTarget;
    setScrollPosition(scrollLeft);
  };

  const handleLeftArrowClick = () => {
    const newPosition = scrollPosition - containerWidth/2;
    if (newPosition >= 10) {
      setScrollPosition(newPosition);
      galleryRef.current?.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      });
    } else {
      setScrollPosition(0);
      galleryRef.current?.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    }
  };
  
  const handleRightArrowClick = () => {
    const newPosition = scrollPosition + containerWidth/2;
    const maxScrollPosition = galleryRef.current?.scrollWidth ?? 0 - containerWidth;
    if (galleryRef.current && newPosition <= maxScrollPosition-600) {
      setScrollPosition(newPosition);
      galleryRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      });
    } else if (galleryRef.current) {
      setScrollPosition(maxScrollPosition);
      galleryRef.current.scrollTo({
        left: maxScrollPosition,
        behavior: 'smooth',
      });
    }
  };
  
  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setInitialClickX(event.clientX);
    setInitialScrollLeft(galleryRef.current?.scrollLeft || 0);

    document.body.style.cursor = 'grabbing';
  };
  
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (initialClickX !== 0 && galleryRef.current) {
      const dragX = event.clientX - initialClickX;
      galleryRef.current.scrollLeft = initialScrollLeft - dragX;
    }
  };
  
  const handleMouseUp = () => {
    setInitialClickX(0);
    setInitialScrollLeft(0);

    document.body.style.cursor = 'auto';
  };

  return (
    <div className='image-gallery-container'>
      {scrollPosition > 0 && (
        <div className="arrow left-arrow" onClick={handleLeftArrowClick}>
          <ArrowBackIosIcon />
        </div>
      )}
      {galleryRef.current && scrollPosition < galleryRef.current.scrollWidth - galleryRef.current.offsetWidth && (
        <div className="arrow right-arrow" onClick={handleRightArrowClick}>
         <ArrowForwardIosIcon />
        </div>
      )}
       <div className="image-gallery" ref={galleryRef} 
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}>
       
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






