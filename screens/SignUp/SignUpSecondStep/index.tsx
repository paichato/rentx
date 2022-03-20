import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import React, { Props, useState } from "react";
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
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { RootStackParamList, RootStackScreenProps } from "../../../types";
import { NativeStackNavigatorProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { ScreenStackProps } from "react-native-screens";
import {
  NavigationProp,
  NavigationState,
  ParamListBase,
  useRoute,
} from "@react-navigation/native";

interface Params {
  user: {
    name: string;
    email: string;
    driverLicense: string;
  };
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export default function SignUpSecondStep({ navigation }: any) {
  const theme = useTheme();
  const route = useRoute();
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { user } = route.params as Params;
  console.log(user);

  const handleRegister = () => {
    if (!password || !passwordConfirm) {
      return Alert.alert("Preencha todos os campos!");
    }
    if (password !== passwordConfirm) {
      return Alert.alert("Senhas nao sao iguais");
    }

    navigation.navigate("Confirmation", {
      title: "Conta criada!",
      message: "Agora e so fazer login\n e aproveitar",
      nextScreenRoute: "SignIn",
    });
  };

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
            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              value={password}
              onChangeText={setPassword}
            />
            <PasswordInput
              iconName="lock"
              placeholder="Repetir Senha"
              value={passwordConfirm}
              onChangeText={setPasswordConfirm}
            />
          </Form>
          <Button
            color={theme.colors.sucess}
            title="Proximo"
            onPress={handleRegister}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
