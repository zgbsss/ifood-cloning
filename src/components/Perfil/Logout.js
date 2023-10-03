import react from "react";
import { MaterialIcons } from '@expo/vector-icons'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'

export default function Logout({navigation}) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.container} >
            <View style={styles.divisor}>
                <View style={styles.conteudo}>
                    <MaterialIcons name="logout" color={"#DE2B2B"} size={25}/>
                    <Text style={styles.titulo}>Logout</Text>
                    <MaterialIcons name="keyboard-arrow-right" color={"#DE2B2B"} size={25}/>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 4,
        borderColor: 'rgba(0,0,0,.1)',
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginVertical: 0,
        marginHorizontal: 20,
        marginTop: 10,
    },
    conteudo: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
    },
    titulo: {
        fontWeight: "bold",
        color: '#DE2B2B',
    }
})