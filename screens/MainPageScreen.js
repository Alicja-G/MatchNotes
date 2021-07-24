import React from "react";
import { View, Text, StyleSheet, Button, YellowBox } from "react-native";

const MainPageScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The mainPageScreen!</Text>
      <Button
        style={styles.newMatchBtn}
        onPress={() => {
          props.navigation.navigate({ routeName: "NewMatch" });
        }}
        title="Nowy mecz"
      />
      <Button style={styles.currentMatchBtn} title="Załaduj trwający" />
      <Button style={styles.pastMatchesBtn} title="Poprzednie mecze" />
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

export default MainPageScreen;
