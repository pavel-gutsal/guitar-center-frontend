import { useState, useEffect } from 'react';
import { SAbout, SDescriptionWrapper, SSpecsBlock } from './About.styles';
import { CarouselTablet } from './CarouselTablet';
import { CarouselLaptop } from './CarouselLaptop';
import { SpecsBriefIcon } from './SpecsBriefIcon';
import { PaymentMethods } from './PaymentMethods';
import { Payment } from './Payment';
import { Delivery } from './Delivery';
import { Modal } from './Modal';
import { useAppDispatch } from '../../../app/hooks';
import {
  initialise,
  erase,
} from '../../../features/AboutCarousel/AboutCarouselReducer';
import { CatalogItem, Details } from '../../../types';

interface Props {
  briefData: CatalogItem;
  details: Details;
}

export const About = ({ briefData, details }: Props) => {
  const dispatch = useAppDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [closeModalAnimation, setCloseModalAnimation] = useState(false);

  const closeModalHandler = () => {
    setCloseModalAnimation(true);
    setTimeout(() => {
      setOpenModal(false);
      document.body.style.overflowY = 'auto';
      setCloseModalAnimation(false);
    }, 400);
  };

  const openModalHandler = () => {
    setOpenModal(true);
    document.body.style.overflowY = 'hidden';
  };

  const initialiseCarousel = () => {
    dispatch(initialise({ length: details.photos.length }));
  };

  const dismountCarousel = () => {
    dispatch(erase());
  };

  useEffect(() => {
    initialiseCarousel();

    return () => dismountCarousel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SAbout>
      <Modal
        openModal={openModal}
        closeModalHandler={closeModalHandler}
        closeModalAnimation={closeModalAnimation}
        photos={details.photos}
      />
      <CarouselLaptop
        photos={details.photos}
        openModalHandler={openModalHandler}
      />
      <SDescriptionWrapper>
        <CarouselTablet
          photos={details.photos}
          comments={details.comments}
          data={briefData}
        />
        <Payment data={briefData} comments={details.comments} />
        <Delivery />
        <PaymentMethods />
        <SSpecsBlock>
          <SpecsBriefIcon
            categoryProduct={details.category}
            specsBriefIcon={details.specsBriefIcon}
          />
        </SSpecsBlock>
      </SDescriptionWrapper>
    </SAbout>
  );
};
