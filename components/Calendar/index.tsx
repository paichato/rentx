import { View, Text } from "react-native";
import React from "react";
import { Container } from "./styles";
import { Calendar as CustomCalendar } from "react-native-calendars";

export function Calendar() {
  return (
    <Container>
      <CustomCalendar />
    </Container>
  );
}
