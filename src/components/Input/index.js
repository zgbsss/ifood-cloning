import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput, View, StyleSheet } from 'react-native';

export default function Input(props){
    return (
        <View style={styles.container}> 
            <MaterialIcons name="search" size={25} color={'#FF5665'} />
            <TextInput style={styles.textInput} placeholder={props.placeholder} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        background: '#EEE',
        height: 'auto',
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'rgba(0,0,0,.1)',
        borderStyle: 'solid',
        borderColor: 'rgba(0,0,0,.1)',
        borderStyle: 'solid',
        margin: 10,
        borderRadius: 4,
        borderWidth: 1,
        paddingHorizontal: 15,       
    },
    textInput: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },

})