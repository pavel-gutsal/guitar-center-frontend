import { SLocation, SText, SUpperBar } from './UpperBar.styled';

export const UpperBar = () => {
  return (
    <SUpperBar>
      <SText>Delivery</SText>
      <SLocation>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 96 960 960"
          width="24"
        >
          <path d="M480 576q33 0 56.5-23.5T560 496q0-33-23.5-56.5T480 416q-33 0-56.5 23.5T400 496q0 33 23.5 56.5T480 576Zm0 400Q319 839 239.5 721.5T160 504q0-150 96.5-239T480 176q127 0 223.5 89T800 504q0 100-79.5 217.5T480 976Z" />
        </svg>
        Warsow
      </SLocation>
    </SUpperBar>
  );
};
