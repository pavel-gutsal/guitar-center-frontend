import { Skeleton } from '@mui/material';
import {
  SBlockSelectBar,
  SkeletonSX,
} from '../BlockSelectBar/BlockSelectBar.styles';

export const BlockSelectBarSkeleton = () => {
  return (
    <SBlockSelectBar>
      <Skeleton
        sx={SkeletonSX}
        animation="wave"
        variant="rectangular"
        width="170px"
      />
      <Skeleton
        sx={SkeletonSX}
        animation="wave"
        variant="rectangular"
        width="80px"
      />
    </SBlockSelectBar>
  );
};
