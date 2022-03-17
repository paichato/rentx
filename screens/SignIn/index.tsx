import {
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { Container, Header, Subtitle, Title, Footer, Form } from "./styles";
import { Button } from "../../components/Button";
import { useTheme } from "styled-components";
import Input from "../../components/Input";
import PasswordInput from "../../components/PasswordInput";

export default function SignIn() {
  const theme = useTheme();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              value={email}
              onChangeText={setEmail}
            />
            <PasswordInput
              placeholder="Password"
              iconName="lock"
              autoCorrect={false}
              autoCapitalize="none"
              value={password}
              onChangeText={setPassword}
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
              enabled={true}
              loading={false}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
