import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;

  .splide__pagination__page.is-active {
    background: #ff9f1c !important;
    opacity: 1;
  }
`;

export const ProductsGrid = styled.div`
  position: relative;
  width: 100%;
`;
export const SliderContent = styled.div`
  position: relative;
  width: 100%;
`;

export const Slider1 = styled.div`
  display: flex;
  background: #011627;

  > div {
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
    height: 430px;
    object-fit: cover;

    > h1 {
      position: relative;

      &::after {
        content: "";
        position: absolute;
        width: 30%;
        height: 5px;
        background: #FF9F1C;
        left: 0;
        bottom: -16px;
      }
    }

    > img {
      width: 100%;
      height: 430px;
      object-fit: cover;
      object-position: 0 0;
    }
  }

`;
