import React from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View, VirtualizedList } from "react-native";

export default function Bloco() {
    return(
        <TouchableOpacity>
            <View>
                <Text>Hamburgue</Text>
                <Text>Descrição</Text>
            </View>
        </TouchableOpacity>
    )
}