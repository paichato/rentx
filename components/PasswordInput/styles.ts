import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: 56px;
  /* background-color: ${({ theme }) => theme.colors.main}; */
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
  /* ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.main};
    `}; */
`;

export const InputText = styled.TextInput<Props>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg_secondary};
  margin-left: 2px;
  height: 100%;
  /* padding-left: 10px; */
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  padding: 0 23px;
  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.main};
    `};
`;

export const IconContainer = styled.View<Props>`
  height: 56px;
  width: 56px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bg_secondary};
  background-color: ${({ theme }) => theme.colors.bg_secondary};
  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.main};
    `};
`;

export const ChangePasswordVisibilityButton = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
`;
