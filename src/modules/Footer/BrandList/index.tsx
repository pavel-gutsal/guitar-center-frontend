import { IMAGES } from '../../../assets';
import {
  SBrandList,
  SIconWrapper,
  SIcon,
  SBrand,
  STitle,
  SIZE,
} from './BrandList.styles';

export const BrandList = () => {
  return (
    <SBrand>
      <STitle>Official Representatives</STitle>
      <SBrandList>
        <SIconWrapper>
          <SIcon src={IMAGES.BRANDS.ACER} alt="brand icon" title="Acer" />
        </SIconWrapper>
        <SIconWrapper size={SIZE.LARGE}>
          <SIcon src={IMAGES.BRANDS.APPLE} alt="brand icon" title="Apple" />
        </SIconWrapper>
        <SIconWrapper>
          <SIcon src={IMAGES.BRANDS.ASUS} alt="brand icon" title="Asus" />
        </SIconWrapper>
        <SIconWrapper size={SIZE.LARGE}>
          <SIcon src={IMAGES.BRANDS.DELL} alt="brand icon" title="Dell" />
        </SIconWrapper>
        <SIconWrapper size={SIZE.LARGE}>
          <SIcon src={IMAGES.BRANDS.HP} alt="brand icon" title="HP" />
        </SIconWrapper>
        <SIconWrapper>
          <SIcon src={IMAGES.BRANDS.HONOR} alt="brand icon" title="Honor" />
        </SIconWrapper>
        <SIconWrapper>
          <SIcon src={IMAGES.BRANDS.LENOVO} alt="brand icon" title="Lenovo" />
        </SIconWrapper>
        <SIconWrapper size={SIZE.LARGE}>
          <SIcon
            src={IMAGES.BRANDS.MOTOROLA}
            alt="brand icon"
            title="Motorola"
          />
        </SIconWrapper>
        <SIconWrapper>
          <SIcon src={IMAGES.BRANDS.MSI} alt="brand icon" title="MSI" />
        </SIconWrapper>
        <SIconWrapper>
          <SIcon src={IMAGES.BRANDS.REALME} alt="brand icon" title="Realme" />
        </SIconWrapper>
        <SIconWrapper size={SIZE.LARGE}>
          <SIcon src={IMAGES.BRANDS.SAMSUNG} alt="brand icon" title="Samsung" />
        </SIconWrapper>
        <SIconWrapper>
          <SIcon src={IMAGES.BRANDS.VIVO} alt="brand icon" title="Vivo" />
        </SIconWrapper>
        <SIconWrapper size={SIZE.LARGE}>
          <SIcon src={IMAGES.BRANDS.XIAOMI} alt="brand icon" title="Xiaomi" />
        </SIconWrapper>
      </SBrandList>
    </SBrand>
  );
};
