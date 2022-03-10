import { View, Text, TextInputProps } from "react-native";
import React from "react";
import { Container } from "./styles";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
}

export default function Input({ iconName }: Props) {
  const theme = useTheme();

  return (
    <Container>
      <Feather name={iconName} size={24} color={theme.colors.header} />
    </Container>
  );
}
