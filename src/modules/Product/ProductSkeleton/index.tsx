import Skeleton from '@mui/material/Skeleton';
import CircularProgress from '@mui/material/CircularProgress';
import { Category } from '../../../types';
import { RouterBar } from '../../Block/BlockHead/RouterBar';
import { SAbout, SDescriptionWrapper } from '../About/About.styles';
import {
  SCarousel,
  SPhotoGallery,
} from '../About/CarouselLaptop/CarouselLaptop.styles';
import { SCarouselWrapper } from '../About/CarouselTablet/CarouselTablet.style';
import { SDelivery } from '../About/Delivery/Delivery.styles';
import { SPayment } from '../About/Payment/Payment.styles';
import { SPaymentMethods } from '../About/PaymentMethods/PaymentMethods.styles';
import { SButton, SSegemented, STabBar } from '../TabBar/TabBar.styles';
import {
  SCentered,
  SkeletonSX,
  SList,
  SProductSkeleton,
  ThumbNailSkeleton,
} from './ProductSkeleton.styles';

interface Props {
  category: Category;
  model: string | undefined;
}

export const ProductSkeleton = ({ category, model }: Props) => {
  return (
    <SProductSkeleton>
      <RouterBar category={category} model={model} />
      <STabBar>
        <SSegemented>
          <SButton>
            <Skeleton sx={SkeletonSX} />
          </SButton>
          <SButton>
            <Skeleton sx={SkeletonSX} />
          </SButton>
          <SButton>
            <Skeleton sx={SkeletonSX} />
          </SButton>
        </SSegemented>
      </STabBar>
      <SAbout>
        <SPhotoGallery>
          <SList>
            <Skeleton sx={ThumbNailSkeleton} />
            <Skeleton sx={ThumbNailSkeleton} />
            <Skeleton sx={ThumbNailSkeleton} />
            <Skeleton sx={ThumbNailSkeleton} />
            <Skeleton sx={ThumbNailSkeleton} />
          </SList>
          <SCarousel>
            <SCentered>
              <CircularProgress />
            </SCentered>
          </SCarousel>
        </SPhotoGallery>
        <SDescriptionWrapper>
          <SCarouselWrapper>
            <SCentered>
              <CircularProgress />
            </SCentered>
          </SCarouselWrapper>
          <SPayment>
            <SCentered>
              <CircularProgress />
            </SCentered>
          </SPayment>
          <SDelivery>
            <SCentered>
              <CircularProgress />
            </SCentered>
          </SDelivery>
          <SPaymentMethods>
            <SCentered>
              <CircularProgress />
            </SCentered>
          </SPaymentMethods>
        </SDescriptionWrapper>
      </SAbout>
    </SProductSkeleton>
  );
};
