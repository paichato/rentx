import { View, Text, StatusBar } from "react-native";
import React from "react";
import { Container, Header, Subtitle, Title, Footer } from "./styles";
import { Button } from "../../components/Button";
import { useTheme } from "styled-components";

export default function SignIn() {
  const theme = useTheme();

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
      <Footer>
        <Button
          title="Login"
          onPress={() => {}}
          enabled={false}
          loading={false}
        />
        <Button
          color={theme.colors.bg_secondary}
          light
          title="Criar conta gratuita"
          onPress={() => {}}
          enabled={false}
          loading={false}
        />
      </Footer>
    </Container>
  );
}
