import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native'
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Recents from './Recents';
import Contacts from './Contacts';
import Favrites from './Favrites';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from "react-native-modal";
const Tab = createBottomTabNavigator();
const ContactTab = () => {


    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const [name, setName]=useState('')
    const [phone, setPhone]=useState('')
    const [contacts, setContacts]=useState('')

    return (
        <Tab.Navigator initialRouteName='Favorit'
            screenOptions={{
                // headerShown: false,
                headerTitle: () => {
                    return (
                        <View style={{ backgroundColor: 'rgb(236, 235, 236)', borderRadius: 25, flexDirection: 'row', width: '100%',alignItems:'center',justifyContent:'space-around' }}>
                            <AntDesign name={'search1'} size={20} />
                            <TextInput
                             style={{ color: 'black',fontFamily:'Poppins-Bold', }} 
                             placeholder='Search contacts & places'
                            //  onChangeText={()=>}
                             />
                            <TouchableOpacity style={{ opacity: 9 }} onPress={() => Alert.alert('You can search contacts By voice')}>
                                <MaterialCommunityIcons name={'microphone-outline'} size={20} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ opacity: 9 }} onPress={toggleModal} >
                                <MaterialCommunityIcons name={'dots-vertical'} size={20} />
                            </TouchableOpacity>
                            <Modal isVisible={isModalVisible}
                                onBackdropPress={() => setModalVisible(false)}
                                backdropOpacity={0.001}
                                animationIn={'bounceIn'}
                                animationOut={'slideOutUp'}
                                style={{ justifyContent: 'flex-start', alignItems: 'flex-end', }}
                            >
                                <View style={{ flex: 0.15, marginRight: 10, padding: 10, backgroundColor: 'rgb(236, 235, 236)', elevation: 1 }}>
                                    <Text style={{ color: 'black', fontSize: 20, margin: 5 }} onPress={() => Alert.alert('Call History')}>Call History</Text>
                                    <Text style={{ color: 'black', fontSize: 20, margin: 5 }} onPress={() => Alert.alert('Settings')}>Settings</Text>
                                    <Text style={{ color: 'black', fontSize: 20, margin: 5 }} onPress={() => Alert.alert('Help & feedback')}>Help & feedback</Text>
                                    {/* <Button title="Hide modal" onPress={toggleModal} /> */}
                                </View>
                            </Modal>

                        </View>
                    )
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
                tabBarActiveBackgroundColor: 'rgb(162, 222, 138)',
                tabBarInactiveBackgroundColor: 'rgb(236, 235, 236)',
                tabBarHideOnKeyboard:true,
                tabBarStyle: {
                    //    margin:10,
                    //     padding: 10,
                    backgroundColor: 'rgba(189, 214, 132,0.3)',
                },
            }}
        >
            <Tab.Screen name='Favorites' component={Favrites}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{}}>
                                {focused ? <Entypo color='black' name={'star'} size={25} />
                                    :
                                    <Entypo color='gray' name={'star-outlined'} size={25} />
                                }


                            </View>
                        )
                    },
                }}
            />
            {/* Star icon */}
            <Tab.Screen name='Recents' component={Recents}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                {/**/}
                                {focused ? <MaterialCommunityIcons color='black' name='clock-time-four' size={25} />
                                    :
                                    <MaterialCommunityIcons color='gray' name='clock-time-four-outline' size={25} />}

                            </View>
                        )
                    }
                }}
            />
            {/* time icon */}
            <Tab.Screen name='Contacts' component={Contacts}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                {focused ? <FontAwesome6 color='black' name='user-group' size={25} />
                                    :
                                    <Feather color='gray' name='users' size={25} />
                                }
                            </View>
                        )
                    }
                }}
            />
            {/* double user */}
        </Tab.Navigator>
    )
}

export default ContactTab

const styles = StyleSheet.create({})