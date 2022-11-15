import { View, Text, StatusBar, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
 	// <Icon name="rocket" color="#eee" size={30} />

import styles from '../themes/styles';

const ComponentLogin = ({navigation}) => {
  return (
    <SafeAreaView style={styles.flex_1}>
        <StatusBar />
        <ImageBackground source={require('../images/bg_1.jpg')} style={[ styles.flex_1  , { }]} >

            <View style={[ styles.flex_5 , {}]}></View>
            <View style={[ styles.flex_4 , {}]}>
                <Text  style={[  , {
                    fontSize: 35, fontWeight: 'bold',
                    color: '#fff',
                    marginLeft: 15,
                    marginRight: 80,
                }]}>Discover premium coffee around you</Text>
                <TouchableOpacity onPress={() => {navigation.navigate('Home')}} >
                <View style={[ styles.viewCenter, styles.row , {
                    marginTop: 30,
                    marginHorizontal: 10,
                    padding: 10,
                    borderRadius: 10,
                    borderWidth:0.5
                }]}>
                    <IconMaterialCommunityIcons name="facebook" color="#00f" size={30} />
                    <Text style={[  , {
                        color: '#fff', 
                        textTransform:'uppercase',
                        paddingLeft:5,
                        fontSize:12,
                        fontWeight:'bold',
                    }]}>sign in with facebook</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
                <View style={[ styles.viewCenter, styles.row , {
                    marginTop: 5,
                    marginHorizontal: 10,
                    padding: 10,
                    borderRadius: 10,
                    borderWidth:0.5
                }]}>
                    <IconFontAwesome name="google" color="#f00" size={30} />
                    <Text style={[  , {
                        color: '#fff', 
                        textTransform:'uppercase',
                        paddingLeft:5,
                        fontWeight:'bold',
                        fontSize:12,
                    }]}>sign in with Google</Text>
                </View>
                </TouchableOpacity >
                <View style={[ styles.viewCenter  , {}]}>
                    <Text style={[  , {
                        marginTop: 15,
                        fontSize: 12,
                        color:'#eee',
                        opacity: 0.6,
                    }]}>Don`t have on account?</Text>
                    <Text style={[  , {
                        textTransform:'uppercase',
                        color:'#ff852e',
                        textDecorationLine:'underline',
                        fontSize:13,
                        fontWeight:'bold',
                    }]}>Register</Text>
                </View>
            </View>
        </ImageBackground>
    </SafeAreaView>
  )
}
////         style={[  , {}]}                           //

export default ComponentLogin; 