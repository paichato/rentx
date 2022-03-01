import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { Container } from "./styles";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

export default function Splash() {
  const animation = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: animation.value }],
    };
  });

  const handleAnimatePosition = () => {
    animation.value = withTiming(Math.random() * 300);
  };

  return (
    <Container>
      <Text>Splash</Text>
      <Animated.View style={[styles.box, animatedStyles]}></Animated.View>
      <Button title="Mover" onPress={handleAnimatePosition} />
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
