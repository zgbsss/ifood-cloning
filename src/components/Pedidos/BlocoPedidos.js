import React from "react";
import { MaterialIcons } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function BlocoPedidos({comanda}) {
    return(
        <TouchableOpacity style={styles.bloco}>
            <MaterialIcons name="account-circle" color={"#DE2B2B"} size={25}/>
            <View style={styles.texto}>
                <Text>Usuário: {comanda.usuario}</Text>
                <Text>Status: {comanda.status}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    bloco: {
        borderColor: 'rgba(0,0,0,.1)',
        borderStyle: 'solid',
        width: "95%",
        flexDirection: 'row',
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginVertical: 5,
        marginHorizontal: 10,
    },
    texto:{
        marginLeft: 5,
    },
})