import { View, Text, useWindowDimensions, StatusBar } from "react-native";
import React from "react";
import { Container, Content, Title, Message, Footer } from "./styles";

import LogoSvg from "../../assets/images/logo_background_gray.svg";
import DoneSvg from "../../assets/images/done.svg";
import { RFPercentage } from "react-native-responsive-fontsize";
import ConfirmButton from "../../components/ConfirmButton";
import { useRoute } from "@react-navigation/native";

interface Props {
  title: string;
  message: string;
  nextScreenRoute: string;
  navigation: any;
}
interface Params {
  title: string;
  message: string;
  nextScreenRoute: string;
}

export default function Confirmation({ navigation }: any) {
  const { width } = useWindowDimensions();
  const route = useRoute();
  const { message, nextScreenRoute, title } = route.params as Params;

  const handleOk = () => {
    navigation.navigate(nextScreenRoute);
  };

  return (
    <Container>
      <StatusBar translucent backgroundColor={"transparent"} />
      <LogoSvg width={width} />
      <Content>
        <DoneSvg width={80} height={80} />
        <Title>{title}</Title>
        <Message>{message}</Message>
      </Content>
      <Footer>
        <ConfirmButton onPress={handleOk} title="OK" />
      </Footer>
    </Container>
  );
}
