import React from "react";
import { StyleSheet, Image, Text, TouchableOpacity, View } from "react-native";

export default function BlocoBebida({bebida}) {
    return(
        <TouchableOpacity style={styles.bloco}>
            <View>
                {bebida.imagem && <Image style={{width: 100, height: 100}} source={{uri: bebida.imagem.url}}/>}
                <Text>{bebida.nome}</Text>
                <Text>{bebida.preco}</Text>
                <Text>{bebida.tipo}</Text>
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