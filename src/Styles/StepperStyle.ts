import { StyleSheet } from "react-native";
import { COLORS } from "../theme/colors";

export const StepperCircleStyle = StyleSheet.create({
        outterCircle: {
            height: 24,
            width: 24,
            borderRadius: 100
        },
        innerCircle: {
            height: 12,
            width: 12,
            borderRadius: 100
        },
        EmptyLine:{
            height: 2,
            backgroundColor: COLORS.stepper_off_outter,
            width: 60,
            marginHorizontal: 7
        }
  });