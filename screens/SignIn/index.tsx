import { View, Text } from "react-native";
import React from "react";
import { Container, Header, Subtitle, Title } from "./styles";

export default function SignIn() {
  return (
    <Container>
      <Header>
        <Title>Estamos{"\n"}quase lá.</Title>
        <Subtitle>
          Faça login para começar{"\n"}uma experiência incrível.
        </Subtitle>
      </Header>
    </Container>
  );
}
