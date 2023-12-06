import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Bloco({hamburguer}) {
    return(
        <TouchableOpacity style={styles.bloco}>
            <View>
                <Text>{hamburguer.nome}</Text>
                <Text>{hamburguer.preco}</Text>
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
        height: 250,
        width: "40%",
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginVertical: 15,
        marginHorizontal: 15,
    },
    star: {
        flexDirection: 'row',
    }
})