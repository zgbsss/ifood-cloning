import React from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import { useEffect, useState } from "react";
import Bloco from "../../components/Home/Bloco";


import HamburguerService from "../../services/hamburguer";
export default function Home({ navigation }) {
  const [hamburguer, setHamburguer] = useState([]);

  useEffect(() => {
    async function carregarHamburguer() {
      const response = await HamburguerService.getAllHambugueres();
      setHamburguer(response);
    }
    carregarHamburguer();
  })

  return (
    <View style={styles.container} >
      <ScrollView >
        <Text style={styles.titulo}>Hamburgers</Text>
        <View style={styles.bloco}>
          {hamburguer.map((item) => (
            <Bloco key={item.id} IdHamburguer={item.id} />
          ))}        
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
