import React from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import { useEffect, useState } from "react";
import Bloco from "../../components/Home/Bloco";
import BlocoBebida from "../../components/Home/BlocoBebida";
import HamburguerService from "../../services/hamburguer";
import BebidaService from "../../services/bebida";

export default function Home({ navigation }) {
  // constantes
  const [hamburguer, setHamburguer] = useState([]);
  const [bebida, setBebida] = useState([]);

  // async
  useEffect(() => {
    async function carregarHamburguer() {
      const response = await HamburguerService.getAllHambugueres();
      setHamburguer(response);
    }
    carregarHamburguer();

    async function carregarBebidas() {
      const response = await BebidaService.getAllBebidas();
      setBebida(response);
    }
    carregarBebidas();
  });

  // home
  return (
    <View style={styles.container}>
      <ScrollView >
      <Text style={styles.titulo}>Hamburgers</Text>
        <View style={styles.bloco}>
          {hamburguer.map((item) => (
            <Bloco key={item.id} hamburguer={item} />
          ))}
        </View>
        <Text style={styles.titulo}>Bebidas</Text>
        <View styles={styles.bloco2}>
          {bebida.map((item) => (
            <BlocoBebida key={item.id} bebida={item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: "100%",
  },
  titulo: {
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 15,
    marginRight: 10,
    marginLeft: 20,
  },
  bloco: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    width: '100%',
    backgroundColor: "#fff",
  },
  bloco2: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    width: '100%',
    backgroundColor: "#fff",
  },
});
