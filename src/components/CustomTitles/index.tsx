import React from 'react';

import { Title } from './styles';

interface ITitleProps {
  size: number;
  borderColor: string;
  color?: string;
  fontWeight?: 300 | 400 | 700;
  borderBottomWidth?: string;
  padding?: string;
  margin?: string;
}

const CustomTitles: React.FC<ITitleProps> = ({size, borderColor, color, fontWeight, borderBottomWidth, padding, margin, children}) => {
  return (
    <Title
      size={size}
      borderColor={borderColor}
      color={color}
      fontWeight={fontWeight}
      borderBottomWidth={borderBottomWidth}
      padding={padding}
      margin={margin}
    >
        {children}
    </Title>
  );
}

export default CustomTitles;
