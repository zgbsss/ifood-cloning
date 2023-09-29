import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PedidosAnteriores() {
  return (
    <View style={styles.container}>
      <Text style={styles.aviso}>Pedidos Anteriores</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aviso: {
    marginTop: 25,
    fontSize: 17,
    color: '#999',
  },
});
