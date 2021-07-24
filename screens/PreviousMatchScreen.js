import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const PreviousMatchScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The NewMatchScreen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  newMatchBtn: {
    color: "green",
  },
  currentMatchBtn: {
    color: "blue",
  },
  pastMatchesBtn: {
    color: "grey",
  },
});

export default PreviousMatchScreen;
