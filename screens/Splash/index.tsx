import { View, Text, Button, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { Container } from "./styles";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import BrandSvg from "../../assets/images/brand.svg";
import LogoSvg from "../../assets/images/logo.svg";

export default function Splash({ navigation }: any) {
  const animation = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: animation.value }],
    };
  });

  const splashAnimation = useSharedValue(0);
  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        animation.value,
        [0, 25, 50],
        [1, 0.3, 0],
        Extrapolate.CLAMP
      ),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 50, 100],
            [0, 95, 100],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  const extraStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            splashAnimation.value,
            [0, 1],
            [1, 0.5],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        splashAnimation.value,
        [0, 25, 50],
        [0, 0.3, 1],
        Extrapolate.CLAMP
      ),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 50],
            [-50, 0],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  const startApp = () => {
    navigation.navigate("Home");
  };

  useEffect(() => {
    animation.value = withTiming(100, { duration: 2000 });
    splashAnimation.value = withTiming(50, { duration: 2700 }, () => {
      "worklet";
      runOnJS(startApp)();
    });
  }, []);

  const handleAnimatePosition = () => {
    animation.value = withTiming(Math.random() * 300);
  };

  return (
    <Container>
      <Animated.View style={[brandStyle, { position: "absolute" }]}>
        <BrandSvg width={80} height={50} />
      </Animated.View>
      <Animated.View style={[logoStyle, { position: "absolute" }]}>
        <LogoSvg width={180} height={20} />
      </Animated.View>
    </Container>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
});
