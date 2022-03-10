import { View, Text, StatusBar } from "react-native";
import React from "react";
import { Container, Header, Subtitle, Title, Footer, Form } from "./styles";
import { Button } from "../../components/Button";
import { useTheme } from "styled-components";
import Input from "../../components/Input";

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
      <Form>
        <Input
          placeholder="Email"
          iconName="mail"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
        />
      </Form>
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
