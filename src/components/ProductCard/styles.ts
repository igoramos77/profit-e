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

  > h3 {
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 600;
    margin-top: 0.5rem;
    color: #7A7A7A;
    text-align: center;
  }

  > h4 {
    width: 100%;
    font-size: 20px;
    font-weight: 600;
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
  }

  > p {
    width: 100%;
    font-size: 11px;
    font-weight: 400;
    color: rgb(127, 133, 141);
    margin-top: 5px;
  }
`;
