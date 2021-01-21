import React from 'react';
import { Entypo, Feather } from '@expo/vector-icons';

import { Container, Row, InfoContainer, Title, Quantity, Percentage } from './styles';

interface PropsTypes {
  color: string;
  title: string;
  quantity: number;
  percentage: number;
}

const Folder: React.FC<PropsTypes> = ({ color, title, quantity, percentage }) => {
  return(
    <Container>
      <Row>
        <Entypo name='folder' color={color} size={60} />
        <Feather name='more-vertical' size={20} />
      </Row>

      <InfoContainer>
        <Title>{title}</Title>
        <Quantity>{quantity}</Quantity>
        <Percentage>{`${percentage}%`}</Percentage>
      </InfoContainer>
    </Container>
  );
}

export default Folder;