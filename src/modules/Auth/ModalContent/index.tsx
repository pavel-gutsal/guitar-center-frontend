import { LoginForm } from '../LoginForm';
import { SignupForm } from '../SignupForm';
import { MODE } from '../types';
import {
  SMethodSwitch,
  SModalContent,
  SText,
  STextGroup,
  STitle,
} from './ModalContent.style';

interface Props {
  toggleRegister: () => void;
  mode: MODE;
  fadeOutContent: boolean;
  transitionTo: MODE;
}

export const ModalContent = ({
  toggleRegister,
  mode,
  fadeOutContent,
  transitionTo,
}: Props) => {
  return (
    <SModalContent
      signup={transitionTo === MODE.SIGNUP}
      fadeOut={fadeOutContent}
    >
      {mode === MODE.LOGIN ? (
        <>
          <STitle>Log in</STitle>
          <LoginForm />
          <STextGroup>
            <SText>Don't have an account?</SText>
            <SMethodSwitch onClick={toggleRegister}>Sign up</SMethodSwitch>
          </STextGroup>
        </>
      ) : (
        <>
          <STitle>Sign up</STitle>
          <SignupForm />
          <STextGroup>
            <SText>Already have an account? </SText>
            <SMethodSwitch onClick={toggleRegister}>Log in</SMethodSwitch>
          </STextGroup>
        </>
      )}
    </SModalContent>
  );
};
