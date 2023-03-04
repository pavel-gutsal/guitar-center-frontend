import { SImage, SPhotoList, SThumbNailWrapper } from './PhotoList.styles';

interface Props {
  photos: string[];
  onClick: (index: number) => void;
}

export const PhotoList = ({ photos, onClick }: Props) => {
  return (
    <SPhotoList>
      {photos &&
        photos.length > 0 &&
        photos.map((photo, index) => {
          return (
            <SThumbNailWrapper
              key={photo}
              onClick={() => {
                onClick(index);
              }}
            >
              <SImage src={photo} alt="thumbNail" />
            </SThumbNailWrapper>
          );
        })}
    </SPhotoList>
  );
};
