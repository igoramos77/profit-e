import styled from 'styled-components';

interface ITitleProps {
  size: number;
  borderColor: string;
  color?: string;
  fontWeight?: 300 | 400 | 700;
  borderBottomWidth?: string;
  padding?: string;
  margin?: string;
}

export const Title = styled.div<ITitleProps>`
  position: relative;
  text-align: left;
  padding: ${props => props.padding ? props.padding : '0px'};
  margin: ${props => props.margin ? props.margin : '0px'};
  color: ${props => props.color ? props.color : '#011627'};
  font-size: ${props => props.size ? props.size + 'px' : 20 + 'px'};
  font-weight: ${props => props.fontWeight ? props.fontWeight : 400};

  &::after {
    content: "";
    position: absolute;
    width: ${props => props.borderBottomWidth ? props.borderBottomWidth : '30px'};;
    height: 5px;
    background: ${props => props.borderColor ? props.borderColor : '#FF9F1C'};
    left: 0;
    bottom: -12px;
  }
`;
