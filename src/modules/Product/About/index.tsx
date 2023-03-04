import { useState, useEffect } from 'react';
import { SAbout, SDescriptionWrapper, SSpecsBlock } from './About.styles';
import { database } from '../../../db';
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

export const About = () => {
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
    document.body.style.overflowY = ' hidden';
  };

  const initialiseCarousel = () => {
    dispatch(initialise({ length: database.product[1].photos.length }));
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
        photos={database.product[1].photos}
      />
      <CarouselLaptop
        photos={database.product[1].photos}
        openModalHandler={openModalHandler}
      />
      <SDescriptionWrapper>
        <CarouselTablet
          photos={database.product[1].photos}
          comments={database.product[1].comments}
          data={database.laptops[0]}
        />
        <Payment
          data={database.laptops[0]}
          comments={database.product[1].comments}
        />
        <Delivery />
        <PaymentMethods />
        <SSpecsBlock>
          <SpecsBriefIcon
            categoryProduct={database.product[1].category}
            specsBriefIcon={database.product[1].specsBriefIcon}
          />
        </SSpecsBlock>
      </SDescriptionWrapper>
    </SAbout>
  );
};
