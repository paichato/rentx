import { View, Text, TextInputProps } from "react-native";
import React, { useState } from "react";
import { Container, IconContainer, InputText } from "./styles";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
  placeholder: string;
}

export default function Input({ iconName, placeholder, ...rest }: Props) {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };
  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <Container isFocused={isFocused}>
      <IconContainer>
        <Feather
          name={iconName}
          size={24}
          color={isFocused ? theme.colors.main : theme.colors.text_detail}
        />
      </IconContainer>
      <InputText
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        placeholder={placeholder}
        {...rest}
      />
    </Container>
  );
}
