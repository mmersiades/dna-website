import WatermarkImage, {
  WatermarkImageProps,
} from '@/components/WatermarkImage';
import cn from '@/utils/cn';
import { FC } from 'react';

// A placeholder to fill space in a grid. Only visible on medium and larger screens where there are two columns in the grid
const GridCardPlaceholder: FC<WatermarkImageProps> = ({ type, altText }) => {
  const { container } = {
    container: cn(
      'hidden md:flex',
      'items-center justify-center',
      'relative',
      'aspect-video',
      'w-full h-full',
      'md:p-8 lg:p-20',
    ),
  };

  return (
    <div className={container}>
      <WatermarkImage
        type={type}
        altText={altText}
      />
    </div>
  );
};

export default GridCardPlaceholder;
