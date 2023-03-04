import { useState, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import {
  selectFinish,
  selectStart,
} from '../../../../features/AboutCarousel/AboutCarouselReducer';
import {
  SPhotoGallery,
  SPhotoMain,
  SPhoto,
  SCarousel,
} from './CarouselLaptop.styles';
import { PhotoList } from './PhotoList';

interface Props {
  photos: string[];
  openModalHandler: () => void;
}

export const CarouselLaptop = ({ photos, openModalHandler }: Props) => {
  const dispatch = useAppDispatch();
  const carousel = useAppSelector((state) => state.aboutCarousel);

  const [transition, setTransition] = useState(false);
  const currentPhotoRef = useRef<HTMLDivElement>(null);
  const nextPhotoRef = useRef<HTMLDivElement>(null);

  const changeCurrentIndex = (index: number) => {
    if (transition || index === carousel.index.current) return;

    setTransition(true);

    if (currentPhotoRef.current && nextPhotoRef.current) {
      currentPhotoRef.current.style.transition = 'all 0.4s ease-in-out';
      nextPhotoRef.current.style.transition = 'all 0.4s ease-in-out';
    }

    dispatch(selectStart({ next: index }));

    setTimeout(() => {
      if (currentPhotoRef.current && nextPhotoRef.current) {
        currentPhotoRef.current.style.transition = 'none';
        nextPhotoRef.current.style.transition = 'none';
      }

      dispatch(selectFinish());

      setTransition(false);
    }, 400);
  };

  return (
    <SPhotoGallery>
      <PhotoList photos={photos} onClick={changeCurrentIndex} />
      <SCarousel>
        <SPhotoMain
          position={carousel.position.current ?? 0}
          ref={currentPhotoRef}
        >
          <SPhoto
            src={photos[carousel.index.current ?? 0]}
            alt="main photo"
            onClick={openModalHandler}
          />
        </SPhotoMain>
        <SPhotoMain position={carousel.position.next ?? 1} ref={nextPhotoRef}>
          <SPhoto src={photos[carousel.index.next ?? 1]} alt="main photo" />
        </SPhotoMain>
      </SCarousel>
    </SPhotoGallery>
  );
};
