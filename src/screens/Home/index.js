import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";

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
          <Bloco key={1} />
          <Bloco key={2} />
          <Bloco key={3} />
          <Bloco key={4} />
          <Bloco key={5} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 1000,
    backgroundColor: "#fff",
  },
});
