import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Bloco() {
    return(
        <TouchableOpacity style={styles.bloco}>
                <Text>Hamburgue</Text>
                <Text>Valor</Text>
            <View style={styles.star}>
                <AntDesign name="star" color={'#DE2B2B'} size={20}/>
                <AntDesign name="star" color={'#DE2B2B'} size={20}/>
                <AntDesign name="star" color={'#DE2B2B'} size={20}/>
                <AntDesign name="star" color={'#DE2B2B'} size={20}/>
                <AntDesign name="staro" color={'#DE2B2B'} size={20}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    bloco: {
        borderColor: 'rgba(0,0,0,.1)',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 4,
        height: '35%',
        width: '45%',
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginVertical: 15,
        marginHorizontal: 15,
    },
    star: {
        flexDirection: 'row',
    }
})