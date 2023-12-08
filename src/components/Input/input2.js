import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput, View, StyleSheet } from 'react-native';

export default function Input2(props){
    return (
        <View style={styles.container}> 
            <MaterialIcons name="search" size={25} color={'#faeae8'} />
            <TextInput style={styles.textInput} placeholder={props.placeholder} placeholderTextColor={'#820a02'}/>
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
        borderColor: '#820a02',
        borderStyle: 'solid',
        borderStyle: 'solid',
        margin: 10,
        borderRadius: 4,
        borderWidth: 1,
        paddingHorizontal: 15,       
    },
    textInput: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        color: 'white',
    },

})