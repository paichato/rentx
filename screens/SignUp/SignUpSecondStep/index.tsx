import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import { BackButton } from "../../../components/BackButton";
import Bullet from "../../../components/Bullet";
import Input from "../../../components/Input";
import { Button } from "../../../components/Button";
import {
  Container,
  Form,
  FormTitle,
  Header,
  Steps,
  Subtitle,
  Title,
} from "./styles";
import PasswordInput from "../../../components/PasswordInput";
import { useTheme } from "styled-components";

export default function SignUpSecondStep({ navigation }: any) {
  const theme = useTheme();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton onPress={handleBack} />
            <Steps>
              <Bullet active />

              <Bullet />
            </Steps>
          </Header>

          <Title>Crie sua {"\n"} conta</Title>
          <Subtitle>
            Faça seu cadastro de {"\n"}
            forma rápida e fácil
          </Subtitle>
          <Form>
            <FormTitle>2.Senha</FormTitle>
            <PasswordInput iconName="lock" placeholder="Senha" />
            <PasswordInput iconName="lock" placeholder="Repetir Senha" />
          </Form>
          <Button color={theme.colors.sucess} title="Proximo" />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
