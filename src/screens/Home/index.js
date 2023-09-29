import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import CupomDesconto from '../../components/Home/CupomDesconto';
import Ofertas from '../../components/Home/Ofertas';

export default function Home({ navigation }) {
  return (
    <ScrollView showsHorizontalScrollIndicator={true} style={styles.container}>
      <Ofertas navigation={navigation} />
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