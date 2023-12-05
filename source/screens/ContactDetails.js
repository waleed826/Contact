import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React, { useState } from 'react'
import Modal from 'react-native-modal'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'

const ContactDetails = ({navigation}) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: 'rgb(235,236,235)', flexDirection: 'row', padding: 10, height: '10%', justifyContent: 'space-between', alignItems: 'center' }}>
                <View>
                    <MaterialCommunityIcons name='arrow-left' size={25} onPress={()=>navigation.navigate('Recents')}/>
                </View>
                <View>
                    <Text style={{ fontSize: 20 }}>Name of the Contact</Text>
                </View>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                    <Entypo name={'star-outlined'} size={25} />
                    <MaterialCommunityIcons
                        name={'dots-vertical'}
                        size={25} />
                    <MaterialCommunityIcons
                        name={'pencil-outline'}
                        size={25} />
                </View>
            </View>
            <ScrollView style={{ backgroundColor: 'rgb(235,236,235)', }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>

                    <TouchableOpacity
                        style={styles.tocuhicon}
                        onPress={toggleModal}
                    >
                        <MaterialCommunityIcons
                            name={'phone-outline'}
                            style={styles.iconstylye}
                            color='black'
                            size={20}
                        />
                        <Text>Call</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tocuhicon}>
                        <MaterialCommunityIcons
                            name={'message-text-outline'}
                            style={styles.iconstylye}
                            color='black'
                            size={20} />
                        <Text>Text</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.tocuhicon}
                        onPress={() => Alert.alert('You Can make video call Soon')}
                    >
                        <MaterialCommunityIcons
                            name={'video-outline'}
                            style={styles.iconstylye}
                            color='black'
                            size={20} />
                        <Text>Video</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text>Contact info</Text>
                    <TouchableOpacity>
                        <MaterialCommunityIcons style={{}}
                            name={'phone-outline'}
                            size={20}
                            color='black'
                        />
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <Modal isVisible={isModalVisible}
                onBackdropPress={() => setModalVisible(false)}
                backdropOpacity={0.15}
            >
                <View
                    style={styles.modalmain}>
                    <View style={{ margin: 10, padding: 10, }}>
                        <Text style={styles.modaltxt}>
                            Choose SIM for this call
                        </Text>
                        <TouchableOpacity style={styles.modaltouch}>
                            <MaterialCommunityIcons
                                name={'sim'}
                                size={25}
                                color={'black'} />
                            <Text style={styles.modaltxt}>
                                SIM1
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modaltouch}>
                            <MaterialCommunityIcons
                                name={'sim'}
                                size={25}
                                color={'black'} />
                            <Text style={styles.modaltxt}>
                                SIM2
                            </Text>
                        </TouchableOpacity >
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ContactDetails

const styles = StyleSheet.create({
    iconstylye: {
        backgroundColor: 'rgb(200,210,220)',
        padding: 10,
        borderRadius: 20,
    },
    tocuhicon: {
        alignItems: 'center',
        opacity: 9,
    },
    modalmain: {
        flex: 0.28,
        backgroundColor: 'rgb(236, 235, 236)',
        borderRadius: 20,
    },
    modaltxt: {
        fontSize: 20,
        color: 'black',
        margin: 10,
        fontFamily:'Poppins-Bold',
    },
    modaltouch: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
    },
})