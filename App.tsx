// import { ThemeProvider } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import Home from "./screens/Home";
import theme from "./styles/theme";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          {/* <Navigation colorScheme={colorScheme} /> */}
          <Home />
          <StatusBar />
        </ThemeProvider>
      </SafeAreaProvider>
    );
  }
}
