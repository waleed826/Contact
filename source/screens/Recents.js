import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import Modal from 'react-native-modal'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Recents = ({ navigation }) => {
  const nameArray = [
    { id: 0, firstname: 'Ali', secondname: 'Zain', phone: '03141234567' },
    { id: 1, firstname: 'Amhad', secondname: 'Waleed', phone: '03141234567' },
    { id: 2, firstname: 'Bilal', secondname: 'Wali', phone: '03141234567' },
    { id: 3, firstname: 'Brother', secondname: 'Kamran', phone: '03141234567' },
    { id: 4, firstname: 'Ch', secondname: 'kamil', phone: '03141234567' },
    { id: 5, firstname: 'Chooza', secondname: 'Jabaar', phone: '03141234567' },
    { id: 6, firstname: 'Danial', secondname: 'Jabaar', phone: '03141234567' },
    { id: 7, firstname: 'Danish', secondname: 'Hamid', phone: '03141234567' },
    { id: 8, firstname: 'Hassan', secondname: 'Hassan', phone: '03141234567' },
    { id: 9, firstname: 'Hamid', secondname: 'Danish', phone: '03141234567' },
    { id: 10, firstname: 'Jabaar', secondname: 'Danial', phone: '03141234567' },
    { id: 11, firstname: 'kamil', secondname: 'Chooza', phone: '03141234567' },
    { id: 12, firstname: 'Kamran', secondname: 'Ch', phone: '03141234567' },
    { id: 13, firstname: 'Wali', secondname: 'Brother', phone: '03141234567' },
    { id: 14, firstname: 'Waleed', secondname: 'Bilal', phone: '03141234567' },
    { id: 15, firstname: 'Zain', secondname: 'Ali', phone: '03141234567' },
  ]
  const [color, setColor] = useState('');
  useEffect(() => {
    generateRandomColor();
  }, [])
  const generateRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    console.log("🚀 ~ file: Recents.js:33 ~ generateRandomColor ~ randomColor:", randomColor)
    if (randomColor === 'ffffff') {
      setColor('black')
    }
    else {
      setColor(`#${randomColor}`);
    }

  };
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [showIcon, setIconShow] = useState(null)
  const [shown , setShown] = useState(false)
  const hideIcon = (index) => {
   if(shown == false)
   {
    setIconShow(index)
    setShown(true)
  }
  else{
    setIconShow(null)
    setShown(false)
  }
    
  }

  const [isSelected, setSelected] = useState(false)
  const setCheck = () => {
    setSelected(!isSelected)
  }
  
  
  return (
    <>
      <FlatList
        data={nameArray}
        ListHeaderComponent={() => {
          return (

            <View style={{ backgroundColor: 'white', borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>

              <Text style={{ fontSize: 13, color: 'gray', margin: 10, fontFamily: 'Poppins-Bold', }}>Today</Text>
            </View >

          )
        }}
        renderItem={({ item, index }) => {
          return (
            <View style={{backgroundColor:'lightgray'}}>

              <View style={{ backgroundColor: 'white', justifyContent: 'space-between', margin: 10, padding:10, borderRadius: 20 }}>
                <View style={{ backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: 20 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('ContDetails')}
                      style={{ backgroundColor: color, width: 30, height: 30, borderRadius: 15, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                      <Text style={{ color: 'white', fontFamily: 'Poppins-Bold', }}>{item.firstname.slice(0, 1)}</Text>
                      <Text style={{ color: 'white', fontFamily: 'Poppins-Bold', }}>{item.secondname.slice(0, 1)}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => hideIcon(index)}
                      style={{ margin: 10, padding: 10, opacity: 9, }}>

                      <Text style={{ fontSize: 15, color: 'black', fontFamily: 'Poppins-Bold', }}>{item.firstname}{'\t'}{item.secondname}</Text>
                      <Text style={{ fontSize: 15, color: 'black', fontFamily: 'Poppins-Bold', }}>{item.phone}</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity onPress={toggleModal}>
                    <MaterialCommunityIcons style={{}} color='black' name={'phone-outline'} size={20} />
                  </TouchableOpacity>
                </View>
                {showIcon === index ?
                  <View key={index.item} style={{ flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: 'white', borderTopWidth: 1, borderTopColor: 'gray' }}>

                    <TouchableOpacity 
                      style={styles.tocuhicon}
                      onPress={() => Alert.alert('You Can make video call Soon')}
                    >
                      <MaterialCommunityIcons
                        name={'video-outline'}

                        color='black'
                        size={20} />
                      <Text>Video Call</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tocuhicon}
                      onPress={() => Alert.alert('Can Text Soon')}
                    >
                      <MaterialCommunityIcons
                        name={'message-text-outline'}

                        color='black'
                        size={20} />
                      <Text>Message</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.tocuhicon}
                      onPress={() => Alert.alert('Will show history')}
                    >
                      <MaterialCommunityIcons
                        name={'history'}

                        color='black'
                        size={20}
                      />
                      <Text>History</Text>
                    </TouchableOpacity>
                  </View>
                  : null}
              </View>
            </View>
          )
        }}
      />

      <Modal isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        backdropOpacity={0.15}
      >
        <View style={{ flex: 0.36, backgroundColor: 'rgb(236, 235, 236)', borderRadius: 20, }}>
          <View style={{ margin: 10, padding: 10, }}>
            <Text style={{ color: 'black', fontSize: 20 }}>Choose SIM for this call</Text>
            <TouchableOpacity style={{ flexDirection: 'row', margin: 10, alignItems: 'center', }}>
              <MaterialCommunityIcons name={'sim'} size={25} color={'black'} />
              <Text style={{ fontSize: 20, color: 'black', margin: 10 }}>
                SIM1
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
              flexDirection: 'row', margin: 10, alignItems: 'center',
              borderBottomWidth: 1, borderBottomColor: 'gray'
            }}>
              <MaterialCommunityIcons name={'sim'} size={25} color={'black'} />
              <Text style={{ fontSize: 20, color: 'black', margin: 10 }}>
                SIM2
              </Text>
            </TouchableOpacity >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MaterialIcons
                name={isSelected ? 'check-box' : 'check-box-outline-blank'}
                color={isSelected ? 'darkgreen' : 'black'}
                size={25}
                onPress={setCheck}
                style={{ margin: 10, }}
              />
              <Text style={{ fontSize: 15, color: 'black', margin: 10 }} >
                Remember this choice SIM{'\n'}preference is saved with{'\n'}your contacts
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </>
  )
}

export default Recents

const styles = StyleSheet.create({
  tocuhicon: {
    alignItems: 'center',
    opacity: 9,
  },
})