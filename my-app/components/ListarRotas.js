import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ListarRotasScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Listar Rotas</Text>

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
