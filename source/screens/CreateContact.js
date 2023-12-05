import { StyleSheet, Text, View, TextInput, ScrollView, Button, FlatList, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Modal from 'react-native-modal';

const CreateContact = ({ navigation }) => {
    const [firstname, setFirstName] = useState('')
    const [secondname, setSecondName] = useState('')
    const [phone, setPhone] = useState('')
    const [contacts, setContact] = useState(
        [
            { firstname: 'Ali', secondname: 'Zain', phone: '03123456789' },
            { firstname: 'Amhad', secondname: 'Waleed', phone: '03123456798' },
            { firstname: 'Bilal', secondname: 'Wali', phone: '03123456879' },
            { firstname: 'Brother', secondname: 'Kamran', phone: '03123457689' },
            { firstname: 'Ch', secondname: 'kamil', phone: '03123465789' },
            { firstname: 'Chooza', secondname: 'Jabaar', phone: '03123546789' },
        ]
    )
    const [emails, setEmails] = useState(
        [
            { id: 1, mail: 'bcdefg2@example.com' },
            { id: 2, mail: 'cdefghi3@example.com' },
            { id: 3, mail: 'defghij4@example.com' },
            { id: 4, mail: 'efghijk5@example.com' },
        ]
    )
    const saveContact = () => {
        const savedContact = [...contacts, { firstname, secondname, phone }]
        setContact(savedContact)
        navigation.navigate('Contacts')
    }
    const deleteContact = (contact) => {
        const updatedArray = contacts.filter((item) => item != contact)
        setContact(updatedArray)
    }
    const saveButton = () => {
        if (phone.startsWith('03')) {
            saveContact()
        }
        else {
            Alert.alert('put correct values')
        }
    }
    const [isModalVisible, setModalVisible] = useState(false);
    const [iModalVisible, etModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const togleModal = () => {
        etModalVisible(!iModalVisible);
    };
    const [color, setColor] = useState('');
    useEffect(() => {
        generateRandomColor();
    }, [])
    const generateRandomColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        setColor(`#${randomColor}`);
    };
    return (
        <View style={{ backgroundColor: 'white', flex: 1, backgroundColor: 'rgb(236, 235, 236)' }}>

            <View style={{ backgroundColor: 'rgb(236, 235, 236)', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', height: '8.5%' }}>
                <MaterialCommunityIcons name={'close-thick'} color={'black'} size={20} onPress={() => navigation.navigate('Contacts')} />
                <Text style={{ fontFamily: 'Poppins-Bold', color: 'black', fontSize: 20 }}>Create Contact</Text>
                <TouchableOpacity style={{ backgroundColor: 'darkgreen', borderRadius: 18, width: '20%', alignItems: 'center', height: '55%', justifyContent: 'center' }} onPress={() => saveButton()}>
                    <Text style={{ color: 'white', fontFamily: 'Poppins-Bold' }}>Save</Text></TouchableOpacity>
                <TouchableOpacity style={{ opacity: 9 }}
                    onPress={toggleModal}
                >
                    <MaterialCommunityIcons name={'dots-vertical'} size={20} />
                </TouchableOpacity>
                <Modal isVisible={isModalVisible}
                    onBackdropPress={() => setModalVisible(false)}
                    backdropOpacity={0.001}
                    animationIn={'bounceIn'}
                    animationOut={'slideOutUp'}
                    style={{ justifyContent: 'flex-start', alignItems: 'flex-end', }}
                >
                    <View style={{ flex: 0.05, marginRight: 10, padding: 10, backgroundColor: 'rgb(236, 235, 236)', elevation: 1 }}>
                        <Text style={{ color: 'black', fontSize: 20, margin: 5 }} onPress={() => Alert.alert('Help & feedback')}>Help & feedback</Text>

                    </View>
                </Modal>

            </View>

            <ScrollView style={{}}>
                <View style={{ backgroundColor: 'rgb(210,212,210)', padding: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'Poppins-Bold', color: 'black' }} >Save to</Text>
                    <TouchableOpacity onPress={togleModal} style={{ backgroundColor: 'rgb(236, 235, 236)', borderRadius: 15, padding: 5, flexDirection: 'row', alignItems: 'center', opacity: 9 }}>
                        <View style={{ backgroundColor: 'brown', width: '10%', borderRadius: 230, alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Bold', color: 'white' }} >
                                a
                            </Text>
                        </View>
                        <Text style={{ fontFamily: 'Poppins-Bold', color: 'black' }} >
                            abcdefg1@example.com
                        </Text>
                        <FontAwesome5 style={{}} color='black' name={'chevron-down'} size={15} />

                    </TouchableOpacity>
                </View>
                <View style={{ margin: 10, padding: 15, alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => Alert.alert('can add picture soon')}
                        style={{ backgroundColor: 'rgb(162, 222, 138)', height: 80, width: 80, borderRadius: 40, padding: 10, alignItems: 'center', justifyContent: 'center', opacity: 9 }}>
                        <MaterialCommunityIcons name={'image-plus'} size={35} />
                    </TouchableOpacity>
                    <Text onPress={() => Alert.alert('can add picture soon')} style={{ color: 'green' }}>Add Picture</Text>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialCommunityIcons style={{}} color='black' name={'account-outline'} size={25} />
                        <TextInput
                            value={firstname}
                            style={{ borderWidth: 1, width: '70%' }} placeholder='First name'
                            onChangeText={(val) => setFirstName(val)}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialCommunityIcons style={{}} color='rgb(235,236,235)' name={'account-outline'} size={25} />
                        <TextInput
                            value={secondname}
                            style={{ borderWidth: 1, width: '70%' }} placeholder='Last name'
                            onChangeText={(val) => setSecondName(val)}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialIcons style={{}} color='black' name={'business'} size={20} />
                        <TextInput style={{ borderWidth: 1, width: '70%' }} placeholder='Company' />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialCommunityIcons style={{}} color='black' name={'phone-outline'} size={20} />
                        <TextInput
                            value={phone}
                            keyboardType='number-pad'
                            style={{ borderWidth: 1, width: '70%' }} placeholder='Phone'
                            onChangeText={(val) => setPhone(val)}
                        />
                    </View>
                    <Text>Label</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialCommunityIcons style={{}} color='black' name={'email-outline'} size={20} />
                        <TextInput style={{ borderWidth: 1, width: '70%' }} placeholder='Email' />
                    </View>
                    <Text>Label</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialCommunityIcons style={{}} color='black' name={'calendar'} size={20} />
                        <TextInput style={{ borderWidth: 1, width: '70%' }} placeholder='Significant Date' />
                    </View>
                    <Text>Label</Text>
                    {/* <Button title='Save Contact' onPress={() => saveButton()} /> */}
                </View>
                <Text>Saved contact</Text>

                {contacts.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} style={{ margin: 10 }} onLongPress={() => deleteContact(item)}>
                            <Text>{item.firstname}{"\t"}{item.secondname}</Text>
                            <Text>{item.phone}</Text>

                        </TouchableOpacity>
                    )
                })}
                <Modal isVisible={iModalVisible}
                    onBackdropPress={() => etModalVisible(false)}
                    backdropOpacity={0.001}
                    animationIn={'bounceIn'}
                    animationOut={'slideOutUp'}
                    style={{ justifyContent: 'flex-start', alignItems: 'center', }}
                >
                    <View style={{ flex: 0.32, marginTop: 100, padding: 10, backgroundColor: 'rgb(236, 235, 236)', elevation: 4 }}>
                        {emails.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} style={{ margin: 10,flexDirection: 'row', alignItems: 'center',justifyContent:'space-between' }}  >
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View
                                            onPress={() => navigation.navigate('ContDetails')}
                                            style={{ backgroundColor: color, width: 30, height: 30, borderRadius: 15, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                            <Text style={{ color: 'white', fontFamily: 'Poppins-Bold', }}>{item.mail.slice(0, 1)}</Text>
                                        </View>
                                        <Text style={{ color: 'black', fontFamily: 'Poppins-Bold', }}>{'\t'}{item.mail}{'\t'}{'\t'}</Text>
                                    </View>
                                    <MaterialCommunityIcons style={{}} color='black' name={'information-outline'} size={20} />

                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </Modal>
            </ScrollView>
            {/* <FlatList
                data={contacts}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text>{item.secondname}</Text>
                        </View>
                    )

                }
                }
            /> */}
        </View>
    )
}

export default CreateContact

const styles = StyleSheet.create({})