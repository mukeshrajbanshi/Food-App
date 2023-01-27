import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import RootStack from "./src/router";

class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



