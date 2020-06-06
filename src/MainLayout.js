import React, { useContext } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { Navbar } from "./components/Navbar";
import MainScreen from "./screens/MainScreen";
import TodoScreen from "./screens/TodoScreen";
import { THEME } from "./theme";
import { ScreenContext } from "./context/screen/screenContext";

const MainLayout = () => {
  const { todoId } = useContext(ScreenContext);

  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        {todoId ? <TodoScreen /> : <MainScreen />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.SPACES.PADDING_HORIZONTAL,
    paddingVertical: 20,
  },
});

export default MainLayout;
