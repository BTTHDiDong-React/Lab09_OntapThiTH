import { View, Text, StatusBar, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from '../themes/styles';
//  import Icon from 'react-native-vector-icons/FontAwesome'
//   <Icon name="rocket" color="#eee" size={30} />
const ComponentLogin = ({navigation}) => {
    return (
        <View style={[styles.flex_1, {

        }]}>
            <ImageBackground source={require('../images/bg_1.jpg')} resizeMode="cover" style={[, {
                flex: 1,
            }]}  >
                <View style={[styles.flex_4, {}]} >

                </View>
                <View style={[styles.flex_3, styles.viewCenterTop, {
                    // backgroundColor: '#0f0'
                }]} >
                    <Text style={[, {
                        marginTop: 10,
                        fontSize: 35,
                        fontWeight: 'bold',
                        marginHorizontal: 35,
                        color: '#fff',
                        textAlign: 'center'
                    }]}>Coffee so good your taste bods will love it.</Text>
                    <Text style={[, {
                        marginTop: 30,
                        marginHorizontal: 50,
                        textAlign:'center',
                        color:'#fff',
                    }]}>The best grain the finest roast, the powerful flavor</Text>

                    <TouchableOpacity style={[, {
                        marginTop: 30,
                        padding: 12,
                        width: '80%',
                        alignItems:'center',
                        backgroundColor: '#fc6232',
                        borderRadius: 10,
                    }]}
                        onPress={() => navigation.navigate('ComponentHome')}
                    >
                        <Text style={[, {
                            fontWeight:'bold',
                            color:'#fff',
                            paddingHorizontal: 20
                        }]}>Get Started</Text>
                    </TouchableOpacity>

                </View>

            </ImageBackground>
            <StatusBar />
        </View>
    )
}

export default ComponentLogin;