import styled from "styled-components/native";
import theme from "../../styles/theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";

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
