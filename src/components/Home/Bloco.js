import React from "react";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Image, Text, TouchableOpacity, View } from "react-native";

export default function Bloco({hamburguer}) {
    return(
        <TouchableOpacity style={styles.bloco}>
            <View>
                {hamburguer.imagem && <Image style={styles.imagem} source={{uri: hamburguer.imagem.url}}/>}
                <Text style={styles.texto1}>{hamburguer.nome}</Text>
                <Text style={styles.texto2}>{hamburguer.preco}</Text>
                <View style={styles.estrelas}>
                <MaterialCommunityIcons name="star-outline" color={"#DE2B2B"} size={25}/>
                <MaterialCommunityIcons name="star-outline" color={"#DE2B2B"} size={25}/>
                <MaterialCommunityIcons name="star-outline" color={"#DE2B2B"} size={25}/>
                <MaterialCommunityIcons name="star-outline" color={"#DE2B2B"} size={25}/>
                <MaterialCommunityIcons name="star-outline" color={"#DE2B2B"} size={25}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    bloco: {
        borderColor: 'rgba(0,0,0,.1)',
        borderStyle: 'solid',
        width: "45%",
        height: 250,
        borderWidth: 1,
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginVertical: 10,
        marginHorizontal: 6,
    },
    imagem: {
        height: 150,
        width: 150,
        marginTop: 5,
        marginLeft: 5,
    },
    texto1:{
        marginTop: 5,
        paddingLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    texto2:{
        paddingLeft: 10,
    },
    estrelas: {
        padding: 3,
        justifyContent: 'center',
        flexDirection: 'row',
    },
})