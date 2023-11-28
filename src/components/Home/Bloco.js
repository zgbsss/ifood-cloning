import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import hamburguerService from "../../services/hamburguer";


export default function Bloco({IdHamburguer}) {
    const [hamburguer, setHamburguer] = useState([IdHamburguer]);

    useEffect(() => {
        async function carregarHamburguer() {
            const response = await hamburguerService.getAllHambugueres();
            setHamburguer(response);
        }
        carregarHamburguer();
    })


    return(
        <TouchableOpacity style={styles.bloco}>
            <View>
                <Text>{hamburguer[IdHamburguer].title}</Text>

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