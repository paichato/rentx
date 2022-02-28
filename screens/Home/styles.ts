import styled from "styled-components/native";
import theme from "../../styles/theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";
import { FlatList } from "react-native";
import { carDTO } from "../../dtos/carsDTOS";

// import { withTheme } from "styled-components";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${hp("20%")}px;
  background-color: ${({ theme }) => theme.colors.header};
  justify-content: flex-end;
  padding: 32px 24px;
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text}; ;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CarList = styled(FlatList as new () => FlatList<carDTO>).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  shosVerticalScrollIndicator: false,
})``;

export const MyCarsButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 13px;
  right: 22px;
`;
