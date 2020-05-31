import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
import AppTextBold from "./AppTextBold";
import { THEME } from "../../theme";

const AppButton = ({
  children,
  onPress,
  color = THEME.COLORS.PRIMARY_COLOR,
  textColor = "#fff",
}) => {
  const Wrapper =
    Platform.OS === "ios" ? TouchableOpacity : TouchableNativeFeedback;

  return (
    <Wrapper onPress={onPress} activeOpacity={0.7}>
      <View style={{ ...styles.button, backgroundColor: color }}>
        <AppTextBold style={{ color: textColor }}>{children}</AppTextBold>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppButton;
