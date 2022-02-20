import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import CarDetails from "../screens/CarDetails";
import Scheduling from "../screens/Scheduling";
import SchedulingDetails from "../screens/SchedulingDetails";
import SchedulingDone from "../screens/SchedulingDone";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="CardDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="SchedulingDone" component={SchedulingDone} />
    </Navigator>
  );
}
