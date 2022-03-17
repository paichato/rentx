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
  value?: string;
}

export default function PasswordInput({
  iconName,
  placeholder,
  value,
  ...rest
}: Props) {
  const theme = useTheme();
  const [visible, setVisible] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };
  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!value);
    console.log(value);
  };

  const handleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <Container isFocused={isFocused}>
      <IconContainer>
        <Feather
          name={iconName}
          size={24}
          color={
            isFocused || isFilled ? theme.colors.main : theme.colors.text_detail
          }
        />
      </IconContainer>
      <InputText
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
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
