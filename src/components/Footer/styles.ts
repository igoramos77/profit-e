import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background: #011627;
  padding: 2rem 0;
  width: 100%;
  display: flex;
  justify-content: center;

  > main {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 1rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1320px;


    > div {
      border: 2px solid red;
      width: 100%;

      > h2 {
        color: #fff;
      }

      > p {
        color: #fff;
      }
    }
  }

`;
