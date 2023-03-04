import { CloseButton } from '../../../../assets/SVG/CloseButton';
import { CarouselFullScreen } from '../CarouselFullScreen';
import { SModal, SBackground, SModalContent } from './Modal.styles';

interface Props {
  openModal: boolean;
  closeModalHandler: () => void;
  closeModalAnimation: boolean;
  photos: string[];
}

export const Modal = ({
  openModal,
  closeModalHandler,
  closeModalAnimation,
  photos,
}: Props) => {
  return (
    <>
      <SBackground
        onClick={closeModalHandler}
        visible={openModal}
        closeModalAnimation={closeModalAnimation}
      />
      <SModal visible={openModal} closeModalAnimation={closeModalAnimation}>
        <SModalContent>
          <CloseButton onClick={closeModalHandler} />
          <CarouselFullScreen photos={photos} />
        </SModalContent>
      </SModal>
    </>
  );
};
