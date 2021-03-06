import React, { useState } from "react";
import { View, Modal, TextInput, StyleSheet, Keyboard } from "react-native";

import { THEME } from "../theme";
import AppButton from "./ui/AppButton";

const EditModal = ({ value, visible, onCancel, onSave }) => {
  const maxTitleLength = 64;
  const modalSettings = {
    animationType: "slide",
    transparent: false,
  };

  const [title, setTitle] = useState(value);

  const onSaveHanlder = () => {
    onSave(title);
    Keyboard.dismiss();
  };

  return (
    <Modal
      visible={visible}
      animationType={modalSettings.animationType}
      transparent={modalSettings.transparent}
    >
      <View style={styles.wrap}>
        <TextInput
          style={styles.input}
          placeholder="Enter todo title"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={maxTitleLength}
          value={title}
          onChangeText={setTitle}
        />
        <View style={styles.buttons}>
          <AppButton onPress={onCancel} color={THEME.COLORS.DANGER_COLOR}>
            Cancel
          </AppButton>
          <AppButton onPress={onSaveHanlder} color={THEME.COLORS.SUCCESS_COLOR}>
            Save
          </AppButton>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: THEME.COLORS.PRIMARY_COLOR,
    width: "80%",
  },
  buttons: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default EditModal;
