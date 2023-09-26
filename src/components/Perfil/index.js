import react from "react";
import { MaterialIcons } from '@expo/vector-icons'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'

export default function Logout() {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.divisor}>
                <View style={styles.conteudo}>
                    <MaterialIcons name="logout" color={"#DE2B2B"}/>
                    <Text>Logout</Text>
                    <MaterialIcons name="keyboard-arrow-right" color={"#DE2B2B"}/>
                </View>
            </View>
        </TouchableOpacity>
    );
}