import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, } from "react-native";
import Input from "../../components/Input";

export default function Login({navigation}){
    function login() {
        navigation.navigate('Main')
    }
    return (
        <View  style={styles.container}>
            <Input style={styles.input} placeholder="Email"/>
            <Text>OI</Text>
            <TouchableOpacity style={styles.botao} onPress={() => login()}>
                <Text style={styles.botaoTexto}>Login</Text>
            </TouchableOpacity>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DE2B2B',
    },
    botao: {
        padding: 10,
        backgroundColor: 'green',
        marginTop: 20,
        borderRadius: 8,
        border: 0,
    },
    botaoTexto: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    }
})