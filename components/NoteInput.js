import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const NoteInput = (props) => {
  const [enteredNote, setEnteredNote] = useState("");

  const noteInputHandler = (enteredText) => {
    setEnteredNote(enteredText);
  };

  const addNoteHandler = () => {
    props.onAddNote(enteredNote);
    setEnteredNote("");
  };
  const cancelHandler = () => {
    props.hideInput();
    setEnteredNote("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="enter note"
          style={styles.noteInput}
          onChangeText={noteInputHandler}
          value={enteredNote}
        />
        <View style={styles.actionButtons}>
          <View style={styles.buttonStyle}>
            <Button title="Close" color="red" onPress={cancelHandler} />
          </View>
          <View style={styles.buttonStyle}>
            <Button title="ADD" onPress={addNoteHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default NoteInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column", //default option
    justifyContent: "center",
    alignItems: "center",
  },
  noteInput: {
    width: "80%",
    borderBottomColor: "darkblue",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  actionButtons: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonStyle: {
    width: "40%",
  },
});
