import { View, Text, useWindowDimensions } from "react-native";
import React from "react";
import { Container, Content, Title, Message } from "./styles";

import LogoSvg from "../../assets/images/logo_background_gray.svg";
import DoneSvg from "../../assets/images/done.svg";
import { RFPercentage } from "react-native-responsive-fontsize";

export default function SchedulingDone() {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <LogoSvg width={width} />
      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro alugado!</Title>
        <Message>
          Agora voce so precisa ir {"\n"} ate a concessionaria da RENTX {"\n"}{" "}
          pegar o seu automovel.
        </Message>
      </Content>
    </Container>
  );
}
