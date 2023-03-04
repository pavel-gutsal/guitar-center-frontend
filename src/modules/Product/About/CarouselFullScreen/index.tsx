import { isNil } from 'lodash';
import { useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { ArrowBack } from '../../../../assets/SVG/ArrowBack';
import { ArrowForward } from '../../../../assets/SVG/ArrowForward';
import {
  moveForwardStart,
  moveBackwardStart,
  moveForwardFinish,
  moveBackwardFinish,
  selectStart,
  selectFinish,
} from '../../../../features/AboutCarousel/AboutCarouselReducer';
import { Movements } from '../../types';
import {
  SCarouselFullScreen,
  SCarouselWrapper,
  SImage,
  SMainPhotoWrapper,
  SPhoto,
  SPhotoList,
  SPhotoWrapper,
  SArrowBackPosition,
  SArrowFarwardPosition,
  SWrapper,
} from './CarouselFullScreen.styles';

interface Props {
  photos: string[];
}

export const CarouselFullScreen = ({ photos }: Props) => {
  const dispatch = useAppDispatch();
  const carousel = useAppSelector((state) => state.aboutCarousel);

  const [transition, setTransition] = useState(false);
  const prevPhotoRef = useRef<HTMLDivElement>(null);
  const currentPhotoRef = useRef<HTMLDivElement>(null);
  const nextPhotoRef = useRef<HTMLDivElement>(null);

  const moveHandler = (move: Movements, index?: number) => {
    if (transition) return;

    setTransition(true);

    if (
      prevPhotoRef.current &&
      currentPhotoRef.current &&
      nextPhotoRef.current
    ) {
      prevPhotoRef.current.style.transition = 'all 0.4s ease-in-out';
      currentPhotoRef.current.style.transition = 'all 0.4s ease-in-out';
      nextPhotoRef.current.style.transition = 'all 0.4s ease-in-out';
    }

    switch (move) {
      case Movements.SELECT:
        if (!isNil(index)) {
          dispatch(selectStart({ next: index }));
        }
        break;
      case Movements.FORWARD:
        dispatch(moveForwardStart());
        break;
      case Movements.BACKWARD:
        dispatch(moveBackwardStart());
        break;
      default:
        break;
    }

    setTimeout(() => {
      if (
        prevPhotoRef.current &&
        currentPhotoRef.current &&
        nextPhotoRef.current
      ) {
        prevPhotoRef.current.style.transition = 'none';
        currentPhotoRef.current.style.transition = 'none';
        nextPhotoRef.current.style.transition = 'none';
      }

      switch (move) {
        case Movements.SELECT:
          dispatch(selectFinish());
          break;
        case Movements.FORWARD:
          dispatch(moveForwardFinish());
          break;
        case Movements.BACKWARD:
          dispatch(moveBackwardFinish());
          break;
        default:
          break;
      }

      setTransition(false);
    }, 400);
  };

  return (
    <SCarouselFullScreen>
      <SWrapper>
        <SPhotoList>
          {photos &&
            photos.map((photo, index) => {
              return (
                <SPhotoWrapper
                  key={index}
                  onClick={() => moveHandler(Movements.SELECT, index)}
                >
                  <SPhoto src={photo} alt="photo" />
                </SPhotoWrapper>
              );
            })}
        </SPhotoList>
        <SCarouselWrapper>
          <SArrowBackPosition>
            <ArrowBack onClick={() => moveHandler(Movements.BACKWARD)} />
          </SArrowBackPosition>
          <SMainPhotoWrapper
            position={carousel.position.prev ?? -1}
            ref={prevPhotoRef}
          >
            <SImage
              src={photos[carousel.index.prev ?? 0]}
              alt="current photo"
            />
          </SMainPhotoWrapper>
          <SMainPhotoWrapper
            position={carousel.position.current ?? 0}
            ref={currentPhotoRef}
          >
            <SImage
              src={photos[carousel.index.current ?? 0]}
              alt="current photo"
            />
          </SMainPhotoWrapper>
          <SMainPhotoWrapper
            position={carousel.position.next ?? 1}
            ref={nextPhotoRef}
          >
            <SImage
              src={photos[carousel.index.next ?? 1]}
              alt="current photo"
            />
          </SMainPhotoWrapper>
          <SArrowFarwardPosition>
            <ArrowForward onClick={() => moveHandler(Movements.FORWARD)} />
          </SArrowFarwardPosition>
        </SCarouselWrapper>
      </SWrapper>
    </SCarouselFullScreen>
  );
};
