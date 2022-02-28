import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bg_primary}; ;
`;
export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(15)}px;
  /* margin-top: 10px; */
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 16px;
`;
export const Appointments = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px 0px;
`;
export const AppointmentsTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
`;
export const AppointmentsQuantity = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
`;
