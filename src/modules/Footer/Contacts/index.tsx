import { IMAGES } from '../../../assets';
import {
  SAddress,
  SImage,
  SGmailImage,
  SContactsGroup,
  SGitHubImage,
  SContacts,
  SCredantialsGroup,
  SIcon,
  SIconDiv,
  SCopyRight,
} from './Contacts.styles';

export const Contacts = () => {
  return (
    <SContacts>
      <SContactsGroup>
        <SAddress
          href="https://t.me/PaulGutsal"
          target="blank"
          title="Telegram"
        >
          <SImage src={IMAGES.CONTACTS.TELEGRAM} alt="Telegram icon" />
        </SAddress>
        <SAddress
          href="mailto:pavel.gutsal@gmail.com"
          target="blank"
          title="gmail"
        >
          <SGmailImage src={IMAGES.CONTACTS.GMAIL} alt="Gmail icon" />
        </SAddress>
        <SAddress
          href="https://www.linkedin.com/in/paul-gutsal/"
          target="blank"
          title="LinkedIn"
        >
          <SImage src={IMAGES.CONTACTS.LINKEDIN} alt="LinkedIn icon" />
        </SAddress>
        <SAddress
          href="https://github.com/pavel-gutsal"
          target="blank"
          title="GitHub"
        >
          <SGitHubImage src={IMAGES.CONTACTS.GITHUB} alt="GitHub icon" />
        </SAddress>
        <SCopyRight>© Web-Shop, pet project by Paul Gutsal, 2023</SCopyRight>
      </SContactsGroup>
      <SCredantialsGroup>
        <SIconDiv>
          <SIcon src={IMAGES.CREDENTIALS.GPAY} alt="gPay icon" />
        </SIconDiv>
        <SIconDiv>
          <SIcon src={IMAGES.CREDENTIALS.APPLEPAY} alt="applePay icon" />
        </SIconDiv>
        <SIconDiv>
          <SIcon src={IMAGES.CREDENTIALS.MASTERCARD} alt="mastercard icon" />
        </SIconDiv>
        <SIconDiv>
          <SIcon src={IMAGES.CREDENTIALS.VISA} alt="visa icon" />
        </SIconDiv>
      </SCredantialsGroup>
    </SContacts>
  );
};
