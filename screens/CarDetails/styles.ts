import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg_secondary};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  margin-top: ${getStatusBarHeight() + 18}px;
  margin-left: 24px;
`;

export const CarImages = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const Content = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const Description = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const Details = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const Brand = styled.Text`
  margin-top: ${getStatusBarHeight() + 32}px;
`;
export const Name = styled.Text`
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const Rent = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const Period = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const Price = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`;
