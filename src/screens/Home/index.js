import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import CupomDesconto from '../../components/Home/CupomDesconto';
import Sugestoes from '../../components/Home/Sugestoes';
import Promocoes from '../../components/Home/Promocoes';
import Ofertas from '../../components/Home/Ofertas';
import Categorias from '../../components/Home/Categorias';
import Restaurantes from '../../components/Home/Restaurantes';

export default function Home({ navigation }) {
  return (
    <ScrollView showsHorizontalScrollIndicator={true} style={styles.container}>
      <Sugestoes />
      <Promocoes />
      <Ofertas navigation={navigation} />
      <Categorias />
      <Restaurantes />
      <CupomDesconto />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});