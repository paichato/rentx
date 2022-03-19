import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [driverLicense, setDriverLicense] = useState("");

  const handleBack = () => {
    navigation.goBack();
  };

  const handleNextStep = () => {
    navigation.navigate("SignUpSecondStep");
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
            <FormTitle>1.Dados</FormTitle>
            <Input
              iconName="user"
              onChangeText={setName}
              value={name}
              placeholder="Nome"
            />
            <Input
              iconName="mail"
              placeholder="Email"
              onChangeText={setEmail}
              value={email}
              keyboardType="email-address"
            />
            <Input
              iconName="credit-card"
              placeholder="CNH"
              value={driverLicense}
              onChangeText={setDriverLicense}
              keyboardType="numeric"
            />
          </Form>
          <Button title="Proximo" onPress={handleNextStep} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
