import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import LazyLoadImage from '@components/LazyLoadImage/LazyLoadImage';
import ImageCarouselPropTypes from './ImageCarouselPropTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import ImageToggleButton from '@components/ImageToggleButton/ImageToggleButton';

const ImageCarousel = ({ images, containerWidth = '500px' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlay, setIsPlay] = useState(true);
  const trackRef = useRef(null);
  const slideWidth = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const slides = track.children;
    slideWidth.current = slides[0].offsetWidth;
    // 이미지 미리 로드하여 캐시에 저장
    images.forEach((image) => {
      const img = new Image();
      img.src = image.src;
    });

    // 이미지가 변경되면 인터벌을 다시 시작하도록 설정
    clearInterval(intervalRef.current);
    if (isPlay) {
      intervalRef.current = setInterval(() => {
        const nextIndex = (currentIndex + 1 >= images.length) ? 0 : currentIndex + 1;
        goToSlide(nextIndex);
      }, 5000);
    }

    return () => clearInterval(intervalRef.current); // 컴포넌트가 언마운트될 때 인터벌 정리
  }, [currentIndex, images, isPlay]);

  const goToSlide = (index) => {
    const track = trackRef.current;
    track.style.transform = `translateX(-${index * slideWidth.current}px)`;
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    const prevIndex = (currentIndex - 1 < 0) ? images.length - 1 : currentIndex - 1;
    goToSlide(prevIndex);
  };

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1 >= images.length) ? 0 : currentIndex + 1;
    goToSlide(nextIndex);
  };

  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [distance, setDistance] = useState(0);

  const onDragStart = (e) => {
    setDragging(true);
    setStartX(e.clientX);
    setDistance(0);
  };

  const onDragOver = (e) => {
    e.preventDefault();

    if (dragging) {
      const currentX = e.clientX;
      const dx = currentX - startX;
      setDistance(dx);
    }
  };

  const onDragEnd = (event) => {
    if (distance < 0) {
      nextSlide(event);
    } else if (distance > 0) {
      prevSlide(event);
    }
    setDragging(false);
  };

  const onTouchStart = (e) => {
    setDragging(true);
    setStartX(e.touches[0].clientX);
    setDistance(0);
  };

  const onTouchMove = (e) => {
    if (dragging) {
      const currentX = e.touches[0].clientX;
      const dx = currentX - startX;
      setDistance(dx);
    }
  };

  const onTouchEnd = (event) => {
    if (distance < 0) {
      nextSlide(event);
    } else if (distance > 0) {
      prevSlide(event);
    }
    setDragging(false);
  };


  const togglePlayButton = useCallback(() => {
    setIsPlay(!isPlay);
  }, [isPlay]);
  return (
    <div className={styles.imageCarousel} style={{
      "--containerHeight": containerWidth
    }}>
      <div className={styles.carouselContainer}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDragEnd={onDragEnd}
        onMouseDown={onDragStart}
        onMouseMove={onDragOver}
        onMouseUp={onDragEnd}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}>
        <div className={styles.carouselTrack} ref={trackRef}>
          {images.map((image, index) => (
            <div className={styles.carouselSlide} key={index}>
              <LazyLoadImage image={image} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.buttonContainer}>

        <FontAwesomeIcon className={styles.carouselPrev} icon={faChevronLeft} id="prevBtn" onClick={prevSlide} />
        <div className={styles.sliderCount}>
          {currentIndex + 1}/{images.length}
        </div>
        <FontAwesomeIcon className={styles.carouselNext} icon={faChevronRight} id="nextBtn" onClick={nextSlide} />
        <ImageToggleButton beforeImage={<FontAwesomeIcon icon={faPlay} />} afterImage={<FontAwesomeIcon icon={faPause} />} onClick={togglePlayButton} />
      </div>
    </div >
  );
};

ImageCarousel.propTypes = ImageCarouselPropTypes;
export default ImageCarousel;
