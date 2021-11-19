import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background: #011627;
  padding: 3rem 0;
  width: 100%;
  display: flex;
  justify-content: center;

  > main {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 1rem;

    display: flex;
    align-items: end;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: 1320px;


    > div {
      width: 100%;

      > button {
        margin-top: 1.5rem;
        background: #FF9F1C;
        height: 48px;
        line-height: 1;
        font-size: 12px;

        &:hover {
          background: #FF9F1C;
        }

        > svg {
          margin-right: 1rem;
        }
      }

      > main {
        display: flex;
        justify-content: space-between;

        > div {

          > h2 {
            color: #fff;
          }

          > p {
            color: #fff;
          }
        }
      }

    }
  }

`;
