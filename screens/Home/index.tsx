import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  CarList,
  Container,
  Header,
  HeaderContent,
  TotalCars,
  MyCarsButton,
} from "./styles";
// import { StatusBar } from "expo-status-bar";
import Logo from "../../assets/images/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { Car } from "../../components/Car";
import { NavigationProp } from "@react-navigation/native";
import api from "../../services/api";
import { carDTO } from "../../dtos/carsDTOS";
import { Loader } from "../../components/Loader";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
  withTiming,
} from "react-native-reanimated";
import {
  RectButton,
  PanGestureHandler,
  GestureDetector,
  Gesture,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

const ButtonAnimated = Animated.createAnimatedComponent(TouchableOpacity);

export default function Home({ navigation }: any) {
  const [cars, setCars] = useState<carDTO>([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  const positionY = useSharedValue(13);
  const positionX = useSharedValue(22);
  const myCarsButtonStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: positionX.value,
        },
        {
          translateY: positionY.value,
        },
      ],
    };
  });

  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      positionX.value = e.translationX;
      positionY.value = e.translationY;
    })
    .onEnd((e) => {
      if (positionX.value > 22 && positionY.value > 13) {
        positionX.value = withTiming(22, { duration: 100 });
        positionY.value = withTiming(13, { duration: 100 });
      } else {
        positionX.value = withTiming(0, { duration: 100 });
        positionY.value = withTiming(0, { duration: 100 });
      }
    });

  const onNewGestureEvent = Animated.event(
    [{ nativeEvent: { x: positionX.value } }],
    {
      useNativeDriver: true,
    }
  );

  const onGestureEvent = useAnimatedGestureHandler({
    onFail(event) {
      console.log("error");
    },
    onStart(_, ctx: any) {
      ctx.positionX = positionX.value;
      ctx.positionY = positionY.value;
    },
    onActive(event, ctx: any) {
      console.log(event);
      positionX.value = ctx.positionX + event.translationX;
      positionY.value = ctx.positionY + event.translationY;
    },
    onEnd(event) {},
  });

  function handleCarlSelection(car: carDTO) {
    navigation.navigate("CarDetails", { car });
  }
  function handleOpensMyCars() {
    navigation.navigate("MyCars");
  }

  useEffect(() => {
    const getCars = async () => {
      api
        .get("/cars")
        .then((res) => {
          // console.log(res.data);
          setCars(res.data);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false);
        });
    };

    getCars();
  }, []);

  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <GestureHandlerRootView
      style={{ flex: 1, backgroundColor: theme.colors.bg_primary }}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor={"transparent"}
        translucent
      />

      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de {cars.length} carros</TotalCars>
        </HeaderContent>
      </Header>
      {loading ? (
        <Loader />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <Car onPress={() => handleCarlSelection(item)} data={item} />
          )}
        />
      )}
      <PanGestureHandler enabled onGestureEvent={onGestureEvent}>
        {/* <GestureDetector gesture={panGesture}> */}
        <Animated.View
          style={[
            myCarsButtonStyles,
            { position: "absolute", bottom: 13, right: 22 },
          ]}
        >
          <ButtonAnimated
            style={[styles.button, { backgroundColor: theme.colors.main }]}
            onPress={handleOpensMyCars}
          >
            <>
              <Ionicons
                color={theme.colors.shape}
                name="ios-car-sport"
                size={38}
              />
            </>
          </ButtonAnimated>
        </Animated.View>
        {/* </GestureDetector> */}
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
