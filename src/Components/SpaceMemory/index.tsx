import React from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

import { Container, Title, Row, IconsContainer, UsedMemory } from './styles';

interface PropsTypes {
  title: string;
  usedMemory: number;
  foldersQuantity: Array<string>
}

const SpaceMemory: React.FC<PropsTypes> = ({ title, foldersQuantity, usedMemory }) => {

  const listFolderIcons = foldersQuantity.map(color => <FontAwesome name='circle' color={color} size={25} />);

  return(
    <Container>
      <Title>{title}</Title>

      <Row>
        <IconsContainer>{listFolderIcons}</IconsContainer>
        <UsedMemory>{`${usedMemory}GB`}</UsedMemory>
      </Row>
    </Container>
  );
}

export default SpaceMemory;