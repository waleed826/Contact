import React, { useState } from 'react';
import { Button, Image, View } from 'react-native';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';


const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };
  
  handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };
  
    launchCamera(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        // Process the captured image
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        console.log(imageUri);
      }
    });
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
     {selectedImage && (
          <Image
            source={{ uri: selectedImage }}
            style={{ flex: 1 }}
            resizeMode="contain"
          />
    )}
    <View style={{ marginTop: 20 }}>
      <Button title="Choose from Device" onPress={openImagePicker} />
    </View>
    <View style={{ marginTop: 20,marginBottom: 50 }}>
      <Button title="Open Camera" onPress={handleCameraLaunch} />
    </View>
  </View>
  );
};

export default App;
// import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React, { useState, useEffect } from 'react'
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack'

// import Favrites from './source/screens/Favrites';
// import ContactTab from './source/screens/ContactTab';
// import ContactSplash from './source/screens/ContactSplash';
// import CreateContact from './source/screens/CreateContact';
// import ContactDetails from './source/screens/ContactDetails';
// const App = () => {
//   const Stack = createNativeStackNavigator();

//   const [contSplash, conSplash] = useState(true)
//   useEffect(() => {
//     setTimeout(() => {
//       conSplash(false)
//     }, 2000)
//   }, [])
 
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='ContactSplash'
//         screenOptions={{ headerShown: false }}>
//         <Stack.Screen name='Tab' component={ContactTab} />
//         {contSplash ? <Stack.Screen name='ContactSplash' component={ContactSplash} />
//           :
//           <Stack.Screen name='Favorit' component={Favrites} />
//         }
//         <Stack.Screen name='CreatCont' component={CreateContact} />
//         <Stack.Screen name='ContDetails' component={ContactDetails}/>

//       </Stack.Navigator >
//     </NavigationContainer >
//   )
// }



// export default App

// const styles = StyleSheet.create({})
