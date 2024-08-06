import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ExibirCaminhoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Exibir Caminho</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
