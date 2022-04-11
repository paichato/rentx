import React from "react";
import Home from "../screens/Home";
import CarDetails from "../screens/CarDetails";
import Scheduling from "../screens/Scheduling";
import SchedulingDetails from "../screens/SchedulingDetails";
import Confirmation from "../screens/Confirmation";
import MyCars from "../screens/MyCars";
import Splash from "../screens/Splash";
import SignIn from "../screens/SignIn";
import SignUpFirstStep from "../screens/SignUp/SignUpFirstStep";
import SignUpSecondStep from "../screens/SignUp/SignUpSecondStep";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppStackRoutes } from "./app.stack.routes";
import HomeSVG from "../assets/images/home.svg";
import CarSVG from "../assets/images/car2.svg";
import PeopleSVG from "../assets/images/people2.svg";
import { useTheme } from "styled-components";
import { Platform } from "react-native";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.main,
        tabBarInactiveTintColor: theme.colors.text_detail,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          height: 78,
          backgroundColor: theme.colors.bg_primary,
        },
      }}
    >
      <Screen
        name="Home"
        component={AppStackRoutes}
        options={{
          gestureEnabled: false,
          tabBarIcon: ({ color }) => (
            <HomeSVG fill={color} width={24} height={24} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={SignUpFirstStep}
        options={{
          tabBarIcon: ({ color }) => (
            <PeopleSVG fill={color} width={24} height={24} />
          ),
        }}
      />

      <Screen
        name="MyCars"
        component={MyCars}
        options={{
          tabBarIcon: ({ color }) => (
            <CarSVG fill={color} width={24} height={24} />
          ),
        }}
      />
    </Navigator>
  );
}
