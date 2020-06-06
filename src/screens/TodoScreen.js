import React, { useContext, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { THEME } from "../theme";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

import AppTextBold from "../components/ui/AppTextBold";
import AppCard from "../components/ui/AppCard";
import EditModal from "../components/EditModal";
import AppButton from "../components/ui/AppButton";
import { TodoContext } from "../context/todo/todoContext";
import { ScreenContext } from "../context/screen/screenContext";

const TodoScreen = () => {
  const { selectedTodo, removeTodo, updateTodo } = useContext(TodoContext);
  const { changeScreen } = useContext(ScreenContext);

  const [modalVisible, setModalVisible] = useState(false);
  const minTitleLenght = 3;
  const onSave = (title) => {
    const titleLength = title.trim().length;

    if (titleLength < minTitleLenght) {
      Alert.alert(
        "Error",
        `Title length should be greater than ${minTitleLenght} characters. Now it's only ${titleLength}.`
      );
      return;
    }

    updateTodo({ id: selectedTodo.id, title });
    setModalVisible(false);
  };

  return (
    <View>
      <EditModal
        visible={modalVisible}
        value={selectedTodo.title}
        onSave={onSave}
        onCancel={() => setModalVisible(false)}
      />

      <AppCard style={styles.card}>
        <View style={styles.cardContent}>
          <AppTextBold style={styles.title}>{selectedTodo.title}</AppTextBold>
          <AppButton
            style={styles.editButton}
            onPress={() => setModalVisible(true)}
          >
            <FontAwesome name="edit" size={20} />
          </AppButton>
        </View>
      </AppCard>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <AppButton
            color={THEME.COLORS.INFO_COLOR}
            onPress={() => changeScreen(null)}
          >
            <AntDesign name="back" size={20} color="#fff" />
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton
            color={THEME.COLORS.DANGER_COLOR}
            onPress={() => removeTodo(selectedTodo.id)}
          >
            <AntDesign name="delete" size={20} color="#fff" />
          </AppButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "40%",
  },
  card: {
    marginBottom: 20,
    padding: 15,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
  },
  editButton: {
    width: 100,
  },
});

export default TodoScreen;
