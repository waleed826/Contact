import { Alert, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const Favrites = () => {
  return (
    <View style={{flex:1,alignItems:'center', justifyContent:'center',backgroundColor:'white'}} >
        <LottieView style={{height:300, width:300}} source={require('../assets/Lottie/phonelottie.json')} loop autoPlay/>
        {/* <Image source={require('../../assets/images/Screenshot.jpg')} style={{width:300,height:300}} resizeMode='cover'/> */}
      <Text style={{fontSize:15, textAlign:'center',margin:10,fontFamily:'Poppins-Bold',}}>Call your favorite{'\n'}contacts with just one{'\n'} tap</Text>
      <Text onPress={()=>Alert.alert('U can add ur favrt contact there\nThankyou!')} style={{textAlign:'center',margin:10,color:'darkgreen',fontFamily:'Poppins-Bold',}}>Add a favorite</Text> 
    </View>
  )
}

export default Favrites

const styles = StyleSheet.create({})