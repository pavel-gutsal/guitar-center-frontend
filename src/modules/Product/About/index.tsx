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
import { CatalogItem, Product } from '../../../types';

interface Props {
  briefData: CatalogItem;
  expandedData: Product;
}

export const About = ({ briefData, expandedData }: Props) => {
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
    dispatch(initialise({ length: expandedData.photos.length }));
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
        photos={expandedData.photos}
      />
      <CarouselLaptop
        photos={expandedData.photos}
        openModalHandler={openModalHandler}
      />
      <SDescriptionWrapper>
        <CarouselTablet
          photos={expandedData.photos}
          comments={expandedData.comments}
          data={briefData}
        />
        <Payment data={briefData} comments={expandedData.comments} />
        <Delivery />
        <PaymentMethods />
        <SSpecsBlock>
          <SpecsBriefIcon
            categoryProduct={expandedData.category}
            specsBriefIcon={expandedData.specsBriefIcon}
          />
        </SSpecsBlock>
      </SDescriptionWrapper>
    </SAbout>
  );
};
