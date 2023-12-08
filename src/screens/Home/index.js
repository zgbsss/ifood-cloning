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
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 2, marginTop: 5, backgroundColor: 'black'}} />
              <Text style={styles.titulo}>Hamburgers</Text>
          <View style={{flex: 1, height: 2, marginTop: 5, backgroundColor: 'black'}} />
      </View>
        <View style={styles.bloco}>
          {hamburguer.map((item) => (
            <Bloco key={item.id} hamburguer={item} />
          ))}
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 2, marginTop: 5, backgroundColor: 'black'}} />
              <Text style={styles.titulo}>Bebidas</Text>
          <View style={{flex: 1, height: 2, marginTop: 5, backgroundColor: 'black'}} />
        </View>
        <View style={styles.bloco2}>
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
    marginTop: 15,
    marginBottom: 15,
    marginRight: 10,
    marginLeft: 20,
    textAlign: 'center',
    fontWeight: "bold",
  },
  bloco: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: "row",
    flexWrap: "wrap",
    width: '100%',
    backgroundColor: "#fff",
  },
  bloco2: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: "row",
    flexWrap: "wrap",
    width: '100%',
    backgroundColor: "#fff",
  },
});
