import Skeleton from '@mui/material/Skeleton';
import {
  SButtonContainer,
  SCart,
  SImageContainer,
  SkeletonSmallSX,
  SkeletonSX,
  SPrice,
  SRating,
  STitle,
} from './CartSkeleton.styles';

export const CartSceleton = () => {
  return (
    <SCart>
      <SImageContainer>
        <Skeleton sx={SkeletonSX} animation="wave" variant="rectangular" />
      </SImageContainer>
      <SRating>
        <Skeleton sx={SkeletonSX} animation="wave" variant="rectangular" />
      </SRating>
      <STitle>
        <Skeleton sx={SkeletonSX} animation="wave" variant="rectangular" />
        <Skeleton sx={SkeletonSmallSX} animation="wave" variant="rectangular" />
      </STitle>
      <SPrice>
        <Skeleton sx={SkeletonSX} animation="wave" variant="rectangular" />
      </SPrice>
      <SButtonContainer>
        <Skeleton sx={SkeletonSX} animation="wave" variant="rectangular" />
        <Skeleton sx={SkeletonSX} animation="wave" variant="rectangular" />
      </SButtonContainer>
    </SCart>
  );
};
