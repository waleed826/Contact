import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Modal from "react-native-modal";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Contacts = ({navigation}) => {
    const Stack = createNativeStackNavigator();
    const nameArray = [
        { id: 0, firstname: 'Ali', secondname: 'Zain' },
        { id: 1, firstname: 'Amhad', secondname: 'Waleed' },
        { id: 2, firstname: 'Bilal', secondname: 'Wali' },
        { id: 3, firstname: 'Brother', secondname: 'Kamran' },
        { id: 4, firstname: 'Ch', secondname: 'kamil' },
        { id: 5, firstname: 'Chooza', secondname: 'Jabaar' },
        { id: 6, firstname: 'Danial', secondname: 'Jabaar' },
        { id: 7, firstname: 'Danish', secondname: 'Hamid' },
        { id: 8, firstname: 'Hassan', secondname: 'Hassan' },
        { id: 9, firstname: 'Hamid', secondname: 'Danish' },
        { id: 10, firstname: 'Jabaar', secondname: 'Danial' },
        { id: 11, firstname: 'kamil', secondname: 'Chooza' },
        { id: 12, firstname: 'Kamran', secondname: 'Ch' },
        { id: 13, firstname: 'Wali', secondname: 'Brother' },
        { id: 14, firstname: 'Waleed', secondname: 'Bilal' },
        { id: 15, firstname: 'Zain', secondname: 'Ali' },
    ]
    const [color, setColor] = useState('');
    useEffect(() => {
        generateRandomColor();
    }, [])
    const generateRandomColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        setColor(`#${randomColor}`);
    };
    const [showIcon, setIconShow] = useState(false)

    return (
        <FlatList
            data={nameArray}
            ListHeaderComponent={ () => {
                return(
                
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate('CreatCont')}
                    style={{backgroundColor:'white',flexDirection:'row',justifyContent:'center',opacity:9}}>
                        <MaterialIcons name='person-add-alt' size={25} color={'darkgreen'} style={{margin:10}}/>
                        <Text style={{fontSize:19,color:'darkgreen',margin:10 , fontFamily:'Poppins-Bold'}}>Add new contact</Text>
                    </TouchableOpacity >
                  
                )
            }}
            renderItem={({ item, }) => {
                return (
                    <View style={{ backgroundColor: 'white' }}>
                        <TouchableOpacity 
                        onPress={()=>setIconShow(true)}
                        style={{ margin: 10, padding: 10, flexDirection: 'row', opacity: 9,alignItems:'center', }}>
                           <View style={{flexDirection:'row'}}>
                            <View style={{ backgroundColor: color, width: 30, height: 30, borderRadius: 15, justifyContent: 'center', alignItems: 'center',flexDirection:'row' }}>
                                <Text style={{ color: 'white',fontFamily:'Poppins-Bold' }}>{item.firstname.slice(0, 1)}</Text>
                                <Text style={{ color: 'white',fontFamily:'Poppins-Bold' }}>{item.secondname.slice(0, 1)}</Text>
                            </View>
                            <Text style={{ fontSize: 15, color: 'black',fontFamily:'Poppins-Bold' }}>  {item.firstname} {item.secondname}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                       
                )
            }}
        />
        
    )
}

export default Contacts

const styles = StyleSheet.create({})