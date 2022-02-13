import { RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP } from "react-native-responsive-screen";
import styled from "styled-components/native";

interface ImageIndexProp {
  active?: boolean;
}

export const Container = styled.View`
  width: 100%;
`;

export const ImageIndexes = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-right: 24px;
`;

export const ImageIndex = styled.View<ImageIndexProp>`
  width: 6px;
  height: 6px;
  border-radius: 3;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.title : theme.colors.shape};
  margin-left: 8px;
`;

export const CarImageWrapper = styled.View`
  width: ${widthPercentageToDP("100%")}px;
  height: ${RFValue(132)}px;
  align-items: center;
  justify-content: center;
`;

export const CarImage = styled.Image`
  width: ${RFValue(280)}px;
  height: ${RFValue(132)}px;
`;
