import { isNil } from 'lodash';
import { useState, useRef, useReducer } from 'react';
import { ArrowBack } from '../../../../assets/SVG/ArrowBack';
import { ArrowForward } from '../../../../assets/SVG/ArrowForward';
import { CatalogItem } from '../../../../types';
import { Action, Carousel, Movements } from '../../types';
import { UpperBar } from '../Payment/UpperBar';
import {
  SCarousel,
  SPhotoGallery,
  SPhoto,
  SPhotoWrapper,
  SButtonLeft,
  SButtonRight,
  SDotsWrapper,
  SDot,
  STitle,
  SCarouselWrapper,
  SHorizontalLine,
  SUpperBarWrapper,
} from './CarouselTablet.style';

const initValueCreator = (length: number): Carousel => {
  return {
    position: { prev: -1, current: 0, next: 1 },
    index: { prev: length - 1, current: 0, next: 1 },
    length,
  };
};

const reducer = (carousel: Carousel, action: { type: Action }) => {
  switch (action.type) {
    case Action.FORWARD_START:
      return {
        ...carousel,
        position: { prev: -2, current: -1, next: 0 },
      };
    case Action.BACKWARD_START:
      return {
        ...carousel,
        position: { prev: 0, current: 1, next: 2 },
      };
    case Action.FORWARD_FINISH:
      let nextIndex = (carousel.index.next ?? 0) + 1;

      if (
        !isNil(carousel.index.next) &&
        !isNil(carousel.length) &&
        carousel.index.next >= carousel.length - 1
      ) {
        nextIndex = 0;
      }

      return {
        ...carousel,
        position: { prev: -1, current: 0, next: 1 },
        index: {
          prev: carousel.index.current ?? 0,
          current: carousel.index.next ?? 0,
          next: nextIndex,
        },
      };
    case Action.BACKWARD_FINISH:
      let prevIndex = (carousel.index.prev ?? 0) - 1;

      if (!isNil(carousel.length) && prevIndex < 0) {
        prevIndex = carousel.length - 1;
      }

      return {
        ...carousel,
        position: { prev: -1, current: 0, next: 1 },
        index: {
          prev: prevIndex,
          current: carousel.index.prev ?? 0,
          next: carousel.index.current ?? 1,
        },
      };
    default:
      return carousel;
  }
};

interface Props {
  photos: string[];
  data: CatalogItem;
  comments: number;
}

export const CarouselTablet = ({ photos, data, comments }: Props) => {
  const [carousel, dispatch] = useReducer(
    reducer,
    initValueCreator(photos.length)
  );

  const [transition, setTransition] = useState(false);
  const prevPhotoRef = useRef<HTMLDivElement>(null);
  const currentPhotoRef = useRef<HTMLDivElement>(null);
  const nextPhotoRef = useRef<HTMLDivElement>(null);

  const moveHandler = (move: Movements) => {
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
    dispatch({
      type:
        move === Movements.FORWARD
          ? Action.FORWARD_START
          : Action.BACKWARD_START,
    });

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

      dispatch({
        type:
          move === Movements.FORWARD
            ? Action.FORWARD_FINISH
            : Action.BACKWARD_FINISH,
      });

      setTransition(false);
    }, 400);
  };

  return (
    <SCarouselWrapper>
      <STitle>{data.name}</STitle>
      <SCarousel>
        <SPhotoGallery>
          <SPhotoWrapper
            position={carousel.position.prev ?? -1}
            ref={prevPhotoRef}
          >
            <SPhoto src={photos[carousel.index.prev ?? 0]} />
          </SPhotoWrapper>
          <SPhotoWrapper
            position={carousel.position.current ?? 0}
            ref={currentPhotoRef}
          >
            <SPhoto src={photos[carousel.index.current ?? 0]} />
          </SPhotoWrapper>
          <SPhotoWrapper
            position={carousel.position.next ?? 1}
            ref={nextPhotoRef}
          >
            <SPhoto src={photos[carousel.index.next ?? 1]} />
          </SPhotoWrapper>
          <SButtonLeft>
            <ArrowBack onClick={() => moveHandler(Movements.BACKWARD)} />
          </SButtonLeft>
          <SButtonRight>
            <ArrowForward onClick={() => moveHandler(Movements.FORWARD)} />
          </SButtonRight>
          <SDotsWrapper>
            {photos.map((el, index) => (
              <SDot key={index} active={index === carousel.index.current} />
            ))}
          </SDotsWrapper>
        </SPhotoGallery>
      </SCarousel>
      <SHorizontalLine />
      <SUpperBarWrapper>
        <UpperBar rating={data.rating} comments={comments} />
      </SUpperBarWrapper>
    </SCarouselWrapper>
  );
};
