import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MH;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  position: fixed;
  width: 100%;
  height: 80px;
  z-index: 99999999;

  /* TABLET */
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1320px;
`;

export const HeaderActions = styled.div`
  display: flex;
  text-align: left;

  @media screen and (max-width: 680px) {
    margin: 0 1.5rem;
  }

  > img {
    width: 107px;
  }
`;

export const SearchContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;

  /* TABLET */
  @media (max-width: 768px) {
    display: flex;
    position: absolute;
    width: 100%;
    background: white;
    top: 75px;
    left: 0;
    padding: 0 1rem 1rem 1rem;
  }


  > input {
    width: 100%;
    padding: .58rem 1rem;
    border-radius: 0;
    color: #7A7A7A;
    border: none;
    border-bottom: 1px solid #7A7A7A;
  }

  > svg {
    position: absolute;
    right: 1rem;
    background: #fff;
    padding: 2px;
    border-radius: 50%;
  }
`;

export const AccontContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  > div {
    position: relative;
    display: flex;
    align-items: center;

    /* TABLET */
    @media (max-width: 768px) {
    display: none;
    }

    > span {
      display: flex;
      width: 22px;
      height: 22px;
      justify-content: center;
      flex-direction: row;
      background: #011627;
      border-radius: 50%;
      flex-direction: column;
      align-items: center;
    }

    > a {
      color: #7A7A7A;
      text-decoration: none;
      margin-left: 5px;
      font-size: 13px;
      font-weight: 600;
    }
  }

  > aside {
    position: relative;
    display: flex;
    margin: 0 20px;

    &::after {
      content: '1';
      position: absolute;
      width: 18px;
      height: 18px;
      font-size: 11px;
      background: #2EC4B6;
      color: #fff;
      border-radius: 50%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      right: -24px;
    }
  }

  > footer {
    position: relative;
    margin-left: 25px;
    padding-left: 20px;
    border-left: 1px solid #7A7A7A;

    /* TABLET */
    @media (max-width: 768px) {
      display: none;
    }

    > img {
      margin: 0 4px;
    }
  }
`;

