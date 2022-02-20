import { View, Text, useWindowDimensions, StatusBar } from "react-native";
import React from "react";
import { Container, Content, Title, Message, Footer } from "./styles";

import LogoSvg from "../../assets/images/logo_background_gray.svg";
import DoneSvg from "../../assets/images/done.svg";
import { RFPercentage } from "react-native-responsive-fontsize";
import ConfirmButton from "../../components/ConfirmButton";

export default function SchedulingDone({ navigation }: any) {
  const { width } = useWindowDimensions();

  const handleOk = () => {
    navigation.navigate("Home");
  };

  return (
    <Container>
      <StatusBar translucent backgroundColor={"transparent"} />
      <LogoSvg width={width} />
      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro alugado!</Title>
        <Message>
          Agora voce so precisa ir {"\n"} ate a concessionaria da RENTX {"\n"}{" "}
          pegar o seu automovel.
        </Message>
      </Content>
      <Footer>
        <ConfirmButton onPress={handleOk} title="OK" />
      </Footer>
    </Container>
  );
}
