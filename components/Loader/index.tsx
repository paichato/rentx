import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import theme from "../../styles/theme";

export function Loader() {
  return <ActivityIndicator size="large" color={theme.colors.main} />;
}
