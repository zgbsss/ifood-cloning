import React, { useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import BlocoPedidos from '../../components/Pedidos/BlocoPedidos';
import ComandaService from '../../services/comanda';

export default function PedidosAnteriores() {
  // constantes
  const [comandas, setComandas] = useState([]);

  // async
  useEffect(() => {
    async function carregarComandas() {
      const response = await ComandaService.getAllComandas();
      console.log(response)
      setComandas(response);
    }
    carregarComandas();
  }, [])

  // pedidos anteriores
  return (
      <View style={styles.container}>
        <View style={styles.bloco}>
          {comandas.map((item) => (
            <BlocoPedidos key={item.id} comanda={item} />
          ))}
        </View>
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
  bloco: {
    flex: 1,
    marginTop: 5,
    marginLeft: 5,
    width: '100%',
    backgroundColor: "#fff",
  },
});
