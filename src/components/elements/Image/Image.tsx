import { useState, type JSX } from "react";
import {
  ImageWrapper,
  StyledImage,
  ImagePlaceholder,
} from "./Image.components";
import type { ImageProps } from "./Image.types";

const Image = ({
  src,
  alt,
  width,
  height,
  objectFit = "cover",
  loading = "eager",
  className = "",
  onError,
  onLoad,
}: ImageProps): JSX.Element => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    if (onError) {
      onError();
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
    if (onLoad) {
      onLoad();
    }
  };

  return (
    <ImageWrapper
      className={className}
      style={{
        width: width || "100%",
        height: height || "100%",
      }}
    >
      {hasError ? (
        <ImagePlaceholder>Image not available</ImagePlaceholder>
      ) : (
        <>
          {isLoading && <ImagePlaceholder>Loading...</ImagePlaceholder>}
          <StyledImage
            src={src}
            alt={alt}
            objectFit={objectFit}
            loading={loading}
            onError={handleError}
            onLoad={handleLoad}
            style={{ display: isLoading ? "none" : "block" }}
          />
        </>
      )}
    </ImageWrapper>
  );
};

export default Image;
