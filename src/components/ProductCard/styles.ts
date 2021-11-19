import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.bgBox};
  color: ${props => props.theme.colors.textColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all .2s ease-in-out;
  text-align: center;

  &:hover {
    background: #F2F2F2;
  }

  > button {
    padding: .7rem 1.2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }

  > img {
    margin-bottom: 1.5rem;
  }

  > h3 {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    margin-top: 0.5rem;
    color: #7A7A7A;
    text-align: center;
  }

  > h4 {
    width: 100%;
    font-size: 20px;
    font-weight: 500;
    color: #2EC4B6;
  }

  > main {
    width: 100%;
    line-height: 1;
    font-weight: 400;
    height: 1rem;
    font-size: 12px;
    color: rgb(127, 133, 141);
    margin: 5px 0;
    text-decoration: line-through;
  }

  > p {
    width: 100%;
    font-size: 11px;
    font-weight: 400;
    color: rgb(127, 133, 141);
    margin-top: 5px;
  }
  `;

  export const OffBadge = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 100px 100px 0;
    border-color: transparent #FF9F1C transparent transparent;
    color: #fff;
    font-weight: 600;
    font-size: 17px;

    &::before {
      content: "OFF";
      position: absolute;
      top: 22px;
      left: 53px;
    }
  `;
