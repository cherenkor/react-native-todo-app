import React, { useState } from "react";
import { View, StyleSheet, Alert, Dimensions } from "react-native";
import { THEME } from "../theme";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

import AppTextBold from "../components/ui/AppTextBold";
import AppCard from "../components/ui/AppCard";
import EditModal from "../components/EditModal";
import AppButton from "../components/ui/AppButton";

const TodoScreen = ({ todo, goBack, removeTodo, updateTodoTitle }) => {
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

    updateTodoTitle({ id: todo.id, title });
    setModalVisible(false);
  };

  return (
    <View>
      <EditModal
        visible={modalVisible}
        value={todo.title}
        onSave={onSave}
        onCancel={() => setModalVisible(false)}
      />

      <AppCard style={styles.card}>
        <View style={styles.cardContent}>
          <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
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
          <AppButton color={THEME.COLORS.INFO_COLOR} onPress={goBack}>
            <AntDesign name="back" size={20} color="#fff" />
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton
            color={THEME.COLORS.DANGER_COLOR}
            onPress={() => removeTodo(todo.id)}
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
    width: Dimensions.get("window").width / 3,
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
