import { View, Text, Button } from 'react-native'
import React from 'react'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
 	// <Icon name="rocket" color="#eee" size={30} />


const ComponentHome = ({navigation}) => {
  return (
    <View>
      <Text>ComponentHome</Text>
      <Button  title='abc' onPress={() => navigation.navigate('ComponentPayment')} />
    </View>
  )
}

export default ComponentHome;