import { View, Text, TextInputProps } from "react-native";
import React, { useState } from "react";
import {
  ChangePasswordVisibilityButton,
  Container,
  IconContainer,
  InputText,
} from "./styles";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
  placeholder: string;
}

export default function PasswordInput({
  iconName,
  placeholder,
  ...rest
}: Props) {
  const theme = useTheme();
  const [visible, setVisible] = useState(true);

  const handleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <Container>
      <IconContainer>
        <Feather name={iconName} size={24} color={theme.colors.text_detail} />
      </IconContainer>
      <InputText
        secureTextEntry={visible}
        placeholder={placeholder}
        {...rest}
      />
      <ChangePasswordVisibilityButton onPress={handleVisibility}>
        <Feather
          name={!visible ? "eye" : "eye-off"}
          size={24}
          color={theme.colors.text_detail}
        />
      </ChangePasswordVisibilityButton>
    </Container>
  );
}
