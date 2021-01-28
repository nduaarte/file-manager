import React, { useContext } from 'react';
import { Entypo, Feather } from '@expo/vector-icons';
import { Bar } from 'react-native-progress';
import { ThemeContext } from 'styled-components'; 

import { Container, Row, InfoContainer, Title, Quantity, Percentage } from './styles';

interface PropsTypes {
  color: string;
  title: string;
  quantity: number;
  percentage: number;
}

const Folder: React.FC<PropsTypes> = ({ color, title, quantity, percentage }) => {
  const { darkWhite, turquoise, background } = useContext(ThemeContext);

  // Para o react-native-progress funcionar corretamente.
  const refinedPercentage = percentage / 100;

  return(
    <Container>
      <Row>
        <Entypo name='folder' color={color} size={60} />
        <Feather name='more-vertical' color={darkWhite} size={20} />
      </Row>

      <InfoContainer>
        <Title>{title}</Title>
        <Quantity>{quantity}</Quantity>
        <Percentage>{`${percentage}%`}</Percentage>
        <Bar
          progress={refinedPercentage}
          color={turquoise}
          unfilledColor={background}
          borderWidth={0}
          width={null}
        />
      </InfoContainer>
    </Container>
  );
}

export default Folder;