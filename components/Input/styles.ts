import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 56px;
  /* background-color: ${({ theme }) => theme.colors.main}; */
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  /* justify-content: center; */
`;

export const InputText = styled.TextInput`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg_secondary};
  margin-left: 2px;
  height: 100%;
  /* padding-left: 10px; */
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  padding: 0 23px;
`;

export const IconContainer = styled.View`
  height: 56px;
  width: 56px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bg_secondary};
`;
