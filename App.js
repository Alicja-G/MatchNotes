import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { AppLoading } from "expo";
import NoteItem from "./components/NoteItem";
import NoteInput from "./components/NoteInput";
import { initDatabase, clearTables, addData } from "./helpers/db";
import MainPageScreen from "./screens/MainPageScreen";
import MatchesNavigator from "./navigators/MatchesNavigator";
//clearTables();

//initDatabase();

export default function App() {
  const [matchNotes, setMatchNotes] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false); //first is prperty, secod is a function

  const addNoteHandler = (noteContent) => {
    setMatchNotes((currentNotes) => [
      ...currentNotes,
      { key: Math.random().toString(), value: noteContent },
    ]);
    setIsAddMode(false);
    // addData();
    // addData();
  };

  const removeNoteHandler = (noteId) => {
    setMatchNotes((currentNotes) => {
      return currentNotes.filter((note) => note.key !== noteId);
    });
  };

  const hideInputEl = () => {
    setIsAddMode(false);
  };

  return (
    // <MainPageScreen />
    // <View style={styles.screen}>
    //   <Button title="Add new note" onPress={() => setIsAddMode(true)} />
    //   <NoteInput
    //     visible={isAddMode}
    //     onAddNote={addNoteHandler}
    //     hideInput={hideInputEl}
    //   />
    //   <FlatList
    //     data={matchNotes}
    //     renderItem={(itemData) => (
    //       <NoteItem
    //         id={itemData.item.key}
    //         onDelete={removeNoteHandler}
    //         title={itemData.item.value}
    //       />
    //     )}
    //   />
    // </View>
    <MatchesNavigator />
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    backgroundColor: "black",
  },
});
