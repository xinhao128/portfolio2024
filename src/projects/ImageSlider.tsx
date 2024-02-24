import { useMemo, useState } from "react";
import "./ImageSlider.scss";

import { ReactComponent as LeftArrow } from "../resources/assets/left-arrow.svg";
import { ReactComponent as RightArrow } from "../resources/assets/right-arrow.svg";
import { ProductType } from "./interfaces/Project";

type ImageSliderProps = {
  imageUrls: string[];
  productType: ProductType;
};

const ImageSlider = ({ imageUrls, productType }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0);


  const productTypeClass = useMemo(() => {
    let classes = "image";
    if (productType === ProductType.MOBILE) {
      classes += " image-mobile";
    } else if (productType === ProductType.WEB) {
      classes += " image-web";
    } 
    return classes;
  }, [productType]);

  const showPrevImage = () => {
    setImageIndex(index => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    })
  }

  const showNextImage = () => {
    setImageIndex(index => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    })
  }

  return (
    <div className="img-slider-wrapper">
      <div className="img-slides" style={{ transform: `translateX(-${imageIndex * 100}%)` }}>
        {imageUrls.map((url, index) => (
          <div className="img-slide" key={index}>
            <img src={require(`../resources/assets/${url}`)} alt={`Slide ${index + 1}`} className={productTypeClass} />
          </div>
        ))}
      </div>
      {imageUrls.length > 1 && (
        <button className="img-slider-btn pos-left" onClick={showPrevImage}>
          <LeftArrow />
        </button>
      )}
      {imageUrls.length > 1 && (
        <button className="img-slider-btn pos-right" onClick={showNextImage}>
          <RightArrow />
        </button>
      )}
    </div>
  );
};

export default ImageSlider;
