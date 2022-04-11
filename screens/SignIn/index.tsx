import {
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Container, Header, Subtitle, Title, Footer, Form } from "./styles";
import { Button } from "../../components/Button";
import { useTheme } from "styled-components";
import Input from "../../components/Input";
import PasswordInput from "../../components/PasswordInput";
import * as Yup from "yup";
import { useAuth } from "../../hooks/auth";

export default function SignIn({ navigation }: any) {
  const theme = useTheme();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { signIn } = useAuth();

  const handleSignIn = async () => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um e-mail válido"),
        password: Yup.string().required("A senha e obrigatoria"),
      });
      await schema.validate({ email, password });
      // Alert.alert("Tudo certo");
      console.log({ email, password });

      signIn({ email, password });
    } catch (error) {
      console.log(error);
      if (error instanceof Yup.ValidationError) {
        return Alert.alert("Opa", error.message);
      } else {
        Alert.alert(
          "Erro ao autenticar",
          "Ocorreu um erro ao fazer login, verifique as credenciais"
        );
      }
    }
  };

  const handleNewAccount = () => {
    navigation.navigate("SignUpFirstStep");
  };

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
              onPress={handleSignIn}
              enabled={true}
              loading={false}
            />
            <Button
              color={theme.colors.bg_secondary}
              light
              title="Criar conta gratuita"
              onPress={handleNewAccount}
              enabled={true}
              loading={false}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
