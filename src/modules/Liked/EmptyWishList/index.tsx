import { useEffect } from 'react';
import { IMAGES } from '../../../assets';
import { ROUTES } from '../../../constants';
import { SEmptyWishList, SImage, SLink, SText } from './EmptyWishList.styles';

export const EmptyWishList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SEmptyWishList>
      <SImage src={IMAGES.EMPTY_NOTFOUND.EMPTY_LIST} />
      <SText>It seems your Wish List is empty</SText>
      <SLink to={ROUTES.PHONES}>Back to Products</SLink>
    </SEmptyWishList>
  );
};
