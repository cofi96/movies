import styled from 'styled-components';

export const StyledSlider = styled.div`
  min-height: 600px;
  margin-bottom: 70px;
  .swiper {
    position: relative;
    &::before {
      content: '';
      width: 100%;
      height: 100px;
      background: rgb(0, 0, 0);
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.8575805322128851) 17%,
        rgba(0, 0, 0, 0) 97%
      );
      bottom: 0;
      left: 0;
      position: absolute;
      display: block;
      z-index: 5;
    }
  }
  .swiper-pagination {
    z-index: 100;
  }
  .swiper-pagination-bullet {
    background-color: ${(props) => props.theme.red};
  }
`;

export const StyledBanner = styled.img`
  width: 100%;
  max-width: 100%;
  object-fit: cover;
  display: block;
  max-height: 650px;
`;
