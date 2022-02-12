import styled from "styled-components/native";
import theme from "../../styles/theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// import { withTheme } from "styled-components";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${hp("20%")};
  background-color: ${({ theme }) => theme.colors.header};
`;
