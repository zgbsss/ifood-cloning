import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, } from "react-native";
import Input2 from "../../components/Input/input2";

export default function Login({navigation}){
    function login() {
        navigation.navigate('Main')
    }
    return (
        <View  style={styles.container}>
            <Input2 style={styles.input} placeholder="Email"/>
            <Input2 style={styles.input} placeholder="Senha"/>
            <TouchableOpacity style={styles.botao} onPress={() => login()}>
                <Text style={styles.botaoTexto}>Entrar</Text>
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
        backgroundColor: '#faeae8',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: '95%',
        borderRadius: 8,
        border: 0,
    },
    botaoTexto: {
        fontSize: 20,
        color: "#4F0000",
        textDecorationLine: 'underline',
    },
})