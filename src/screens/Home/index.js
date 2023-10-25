import React from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";

import CupomDesconto from "../../components/Home/CupomDesconto";
import Ofertas from "../../components/Home/Ofertas";
import Bloco from "../../components/Home/Bloco";

export default function Home({ navigation }) {
  const produtos = [
    {
      id: 1,
      nome: 'dfakls',
    }
  ]
  return (
    <View style={styles.container} >
      <Ofertas navigation={navigation} />
      <ScrollView >
        <CupomDesconto />
        <Text style={styles.titulo}>Hamburgueres</Text>
        <View style={styles.bloco}>
            <Bloco key={1} />
            <Bloco key={2} />
            <Bloco key={3} />
            <Bloco key={4} />
            <Bloco key={5} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 1000,
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 15,
    marginRight: 10,
    marginLeft: 20,
  },
  bloco: {
    display: "flex",
  },
});
