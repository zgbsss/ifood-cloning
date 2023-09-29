import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Input from '../../components/Input';


export default function Busca() {
    return( 
        <View style={styles.container} > 
            <Input placeholder="Busca"/>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});