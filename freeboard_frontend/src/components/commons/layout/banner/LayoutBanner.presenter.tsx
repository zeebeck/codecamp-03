import { SliderItem, Wrapper } from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SliderItem src="/images/layout/DeLorean-0.jpeg" />
        </div>
        <div>
          <SliderItem src="/images/layout/DeLorean-1.jpeg" />
        </div>
        <div>
          <SliderItem src="/images/layout/DeLorean-2.jpeg" />
        </div>
      </Slider>
    </Wrapper>
  );
}
