import { SBrandCurve, SFooter, SFooterInfoWrapper } from './Footer.styles';
import { Contacts } from './Contacts';
import { BrandList } from './BrandList';
import { DownloadApp } from './DownloadApp';

export const Footer = () => {
  return (
    <SFooter>
      <DownloadApp />
      <SBrandCurve />
      <SFooterInfoWrapper>
        <BrandList />
        <Contacts />
      </SFooterInfoWrapper>
    </SFooter>
  );
};
