import { View, Text, KeyboardAvoidingView } from "react-native";
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

export default function SignUpFirstStep({ navigation }: any) {
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView behavior="position" enabled>
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
          <FormTitle>1.Dados</FormTitle>
          <Input iconName="user" placeholder="Nome" />
          <Input iconName="mail" placeholder="Email" />
          <Input iconName="credit-card" placeholder="CNH" />
        </Form>
        <Button title="Proximo" />
      </Container>
    </KeyboardAvoidingView>
  );
}
