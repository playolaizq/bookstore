import { DetailedHTMLProps, ImgHTMLAttributes, useRef, useState } from 'react';
import { classNames } from '#/common/utils/styles';
import classes from './ImageWithPlaceholder.module.css';

type ImageWithPlaceholderProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  placeholderHeight?: number | string;
};

function ImageWithPlaceholder({
  className,
  placeholderHeight,
  ...props
}: ImageWithPlaceholderProps) {
  const [loading, setLoading] = useState(true);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const handleImageLoaded = () => {
    setLoading(false);
  };

  return (
    <div className={classes.container} style={{ height: placeholderHeight }}>
      <img
        ref={imageRef}
        className={classNames(className, loading ? classes.hidden : classes.visible)}
        onLoad={handleImageLoaded}
        {...props}
      />
      <div
        className={classNames(classes.placeholder, loading ? classes.visible : classes.hidden)}
        style={{ height: placeholderHeight }}
      ></div>
    </div>
  );
}

export default ImageWithPlaceholder;
