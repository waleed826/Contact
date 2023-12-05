import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const ContactSplash = () => {
  return (
    <View style={{alignItems:'center', justifyContent:'center',flex:1}}>
        <Ionicons name={'call'} size={70} color='mediumpurple'/>
       
    </View>
  )
}

export default ContactSplash

const styles = StyleSheet.create({})