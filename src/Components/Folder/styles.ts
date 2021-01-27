import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 15px;
  width: 42%;
  height: 27%;
  border-radius: 20px;
  
  background-color: ${({ theme }) => theme.graphite};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoContainer = styled.View`
  margin-top: 5px;
  height: 56%;
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.white};
`;

export const Quantity = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.grey};
`;

export const Percentage = styled.Text`
  color: ${({ theme }) => theme.white};
  font-size: 17px;
  font-weight: bold;
`;

