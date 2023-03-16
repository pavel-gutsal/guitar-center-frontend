import { useState, useEffect } from 'react';
import {
  SAuthModal,
  SBackground,
  SCrownIphone,
  SCrownLeft,
  SCrownRight,
  SCrownSamsung,
  SModalContainer,
  SModalHeader,
  STitle,
} from './Auth.style';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { modalHandle } from '../../features/Auth/AuthReducer';
import { CloseButton } from '../../assets/SVG/CloseButton';
import { MODE } from './types';
import { IMAGES } from '../../assets';
import { ModalContent } from './ModalContent';
import { useValidate } from '../../services/registration.service';
import { useGetUserCart } from '../../services/userCart.service';
import { ToastContainer } from 'react-toastify';

export const Auth = () => {
  const [mode, setMode] = useState(MODE.SIGNUP);
  const [fadeOutContent, setFadeOutContent] = useState(false);
  const [transitionTo, setTransitionTo] = useState(MODE.SIGNUP);
  const [fadeoutModalAnimation, setFadeoutModalAnimation] = useState(false);
  const dispatch = useAppDispatch();
  const { modalOpen, bearToken, user } = useAppSelector((state) => state.auth);

  useValidate();
  useGetUserCart(user, bearToken);

  const closeModalHandler = () => {
    setFadeoutModalAnimation(true);
    setTimeout(() => {
      dispatch(modalHandle(false));
      document.body.style.overflowY = 'auto';
      setFadeoutModalAnimation(false);
      setMode(MODE.SIGNUP);
      setTransitionTo(MODE.SIGNUP);
    }, 400);
  };

  const toggleRegister = () => {
    setFadeOutContent(true);
    setTransitionTo((prev) =>
      prev === MODE.SIGNUP ? MODE.LOGIN : MODE.SIGNUP
    );
    setTimeout(() => {
      setMode((prev) => (prev === MODE.SIGNUP ? MODE.LOGIN : MODE.SIGNUP));
      setFadeOutContent(false);
    }, 400);
  };

  useEffect(() => {
    if (bearToken && user) {
      closeModalHandler();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bearToken, user]);

  return (
    <div>
      <ToastContainer autoClose={5000} limit={3} />
      {modalOpen && (
        <>
          <SBackground
            onClick={closeModalHandler}
            fadeOut={fadeoutModalAnimation}
          />
          <SAuthModal fadeOut={fadeoutModalAnimation}>
            <SCrownIphone src={IMAGES.MODALCRAWN.IPHONE} />
            <SCrownSamsung src={IMAGES.MODALCRAWN.SAMSUNG} />
            <SCrownLeft src={IMAGES.MODALCRAWN.LAPTOP_LEFT} />
            <SCrownRight src={IMAGES.MODALCRAWN.LAPTOP_RIGHT} />
            <SModalContainer>
              <SModalHeader>
                <STitle>register to continue...</STitle>
                <CloseButton onClick={closeModalHandler} />
              </SModalHeader>
              <ModalContent
                toggleRegister={toggleRegister}
                mode={mode}
                fadeOutContent={fadeOutContent}
                transitionTo={transitionTo}
              />
            </SModalContainer>
          </SAuthModal>
        </>
      )}
    </div>
  );
};
