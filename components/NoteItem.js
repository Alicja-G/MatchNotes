import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const NoteItem = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.insertedNote}>
        <Text> {props.title} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  insertedNote: {
    padding: 10,
    backgroundColor: "black",
    borderColor: "white",
    borderWidth: 3,
  },
});

export default NoteItem;
