import { View, Text, StatusBar } from "react-native";
import React from "react";
import { Container, Header, Subtitle, Title } from "./styles";

export default function SignIn() {
  return (
    <Container>
      <StatusBar
        backgroundColor={"transparent"}
        translucent
        barStyle={"dark-content"}
      />
      <Header>
        <Title>Estamos{"\n"}quase lá.</Title>
        <Subtitle>
          Faça login para começar{"\n"}uma experiência incrível.
        </Subtitle>
      </Header>
    </Container>
  );
}
