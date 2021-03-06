import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Focus } from "./src/features/focus/focus";
export default function App() {
  const [focusSubject, setFocusSubject] = useState<string | undefined>();
  return (
    <View style={styles.container}>
      {focusSubject ? <Text>I have a subject</Text> : <Focus />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
