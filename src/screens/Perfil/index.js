import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import Logout from '../../components/Perfil/Logout';

export default function Perfil({navigation}) {
    return( 
        <ScrollView style={styles.container} >
            <ScrollView>
                {/* Opções Gerais */}
                <TouchableOpacity style={styles.options} onPress={() => {}}>
                    <MaterialCommunityIcons name="bell-outline" size={35} color="#333"/>
                    <ScrollView style={styles.info} >
                        <Text style={styles.title}> Notificações </Text>
                        <Text style={styles.description}> Minha Central de Notificações </Text>
                    </ScrollView>
                    <MaterialIcons name="keyboard-arrow-right" color="#999" size={20} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.options} onPress={() => {}}>
                    <MaterialCommunityIcons name="credit-card" size={35} color="#333"/>
                    <ScrollView style={styles.info}>
                        <Text style={styles.title}>Pagamentos</Text>
                        <Text style={styles.description}>Meus Saldos e cartões</Text>
                    </ScrollView>
                    <MaterialIcons name="keyboard-arrow-right" color='#999' size={20}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.options} onPress={() => {}}>
                    <MaterialCommunityIcons name="ticket-outline" size={35} color="333" />
                    <ScrollView style={styles.info}>
                        <Text style={styles.title}>Cupons</Text>
                        <Text style={styles.description}>Meus Cupons de Desconto</Text>
                    </ScrollView>
                    <MaterialIcons name="keyboard-arrow-right" color="#999" size={20}/>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.options} onPress={() => {}}>
                    <MaterialCommunityIcons name="heart-outline" size={35} color="#333" />
                        <ScrollView style={styles.info}>
                            <Text style={styles.title}>Favoritos</Text>
                            <Text style={styles.description}>Meus locais favoritos</Text>
                        </ScrollView>
                    <MaterialIcons name="keyboard-arrow-right" color="#999" size={20} />
                </TouchableOpacity>

                {/* Opções Adicionais */}
                <View style={styles.menuAdicional}>
                    <TouchableOpacity style={styles.optionsAdd}>
                        <View style={styles.wrapper}>
                            <MaterialCommunityIcons name="lifebuoy" size={25} color="#CDC"/>
                            <Text style={styles.optionsName}>Ajuda</Text>
                        </View>
                        <MaterialIcons name="keyboard-arrow-right" color="#999" size={20} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionsAdd}>
                    <View style={styles.wrapper}>
                        <MaterialIcons name="settings" size={25} color="#CDC" />
                        <Text style={styles.optionsName}>Configurações</Text>
                    </View>
                    <MaterialIcons name="keyboard-arrow-right" color="#999" size={20} />
                    </TouchableOpacity>

                    <Logout navigation={navigation}/>
                </View>
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
    },

    // Options CSS
    options: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 5,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        border: 1,
    },
    optionsAdd: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 0,
        marginRight: 0,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        border: 1,
    },
    optionsName: {
        marginLeft: 25,
        color: '#ccc',
        fontSize: 15,
    },

    // Options Gerais CSS
    info: {
        marginLeft: 20,
    },
    title: {
        color: '#333',
        fontSize: 18,
    },
    description: {
        fontSize: 16,
        color: '#999',
    },

    // Menu Adicional CSS

    menuAdicional: {
        marginTop: 30,
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});