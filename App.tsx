// import { ThemeProvider } from "@react-navigation/native";
import "react-native-gesture-handler";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components/native";
// import { ThemeProvider } from "styled-components";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import Home from "./screens/Home";
import theme from "./styles/theme";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";
import CarDetails from "./screens/CarDetails";
import Scheduling from "./screens/Scheduling";
import SchedulingDetails from "./screens/SchedulingDetails";
import Confirmation from "./screens/Confirmation";
import { Routes } from "./routes";
// import Routes from "./routes";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      // <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        {/* <Navigation colorScheme={colorScheme} /> */}
        {/* <Home /> */}
        {/* <CarDetails /> */}
        {/* <StatusBar /> */}
        {/* <Scheduling /> */}
        {/* <SchedulingDetails /> */}
        {/* <Confirmation /> */}
        <Routes />
      </ThemeProvider>
      // </SafeAreaProvider>
    );
  }
}
