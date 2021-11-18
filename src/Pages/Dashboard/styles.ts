import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  .is-active {
    background: #ff9f1c !important;
    opacity: 1;
  }
`;

export const CategoriesGrid = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 1rem;
  margin-bottom: 2rem;
  border-radius: 12px;

  /* gg */
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  /* TABLET */
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  /* MOBILE */
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const SliderContent = styled.div`
  position: relative;
  width: 100%;
  background: red;
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
