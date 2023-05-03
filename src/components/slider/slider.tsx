import swiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/css/autoplay';
import { StyledBanner, StyledSlider } from './slider.style';
import { Movie } from '../../models/movie';

type Props = {
  items: Movie[];
};

function Slider({ items }: Props) {
  swiperCore.use([Autoplay]);
  return (
    <StyledSlider>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop
      >
        {items.map((item) =>
          item.featured ? (
            <SwiperSlide key={item.id}>
              <StyledBanner src={item.image} alt="slider image" />
            </SwiperSlide>
          ) : null,
        )}
      </Swiper>
    </StyledSlider>
  );
}

export default Slider;
