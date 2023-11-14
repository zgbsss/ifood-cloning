import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { FAB } from "react-native-paper"

export default function Pedidos() {
  return (
    <View style={styles.container}>
      <Text style={styles.aviso}>Você ainda não fez nenhum pedido</Text>
      <TouchableOpacity>
        <FAB icon="plus" color='white' style={styles.fab}/>
      </TouchableOpacity>
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
  fab: {
    position: 'absolute',
    backgroundColor: '#DE2B2B',
    margin: 16,
    left: 90,
    top: 180,
  },
});
