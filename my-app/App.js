import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
            <Text style={styles.text}>My name is <Text style={styles.bold}>Bentil James Awusi</Text></Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbba13',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 40,
  },

  bold: {
    fontWeight: 'bold',
  },
});
